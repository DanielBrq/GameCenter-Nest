import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../Prisma/prisma.service';
import * as bcrypt from 'bcrypt';

import { ERROR_CODES } from '../../common/errors/response-errors';
import { JWT } from './interfaces/jwt.interface';
import { SignInDto } from './dto/signIn.dto';
import { Role } from './enums/role.enum';
import { SignUpDto } from '../User/dto/SignUp.dto';
import { User } from '../User/interfaces/user.interface';
import { UserService } from '../User/user.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private user: UserService,
  ) {}

  //Crear cuenta
  async signUp(user: SignUpDto): Promise<User> {
    //verificar correo unico
    if (await this.user.existEmail(user.user_email)) {
      throw new ConflictException(ERROR_CODES.user_duplicated_email);
    }
    //verificar identificación nacional unico
    if (await this.user.existNationalId(user.user_national_id)) {
      throw new ConflictException(ERROR_CODES.user_duplicated_identity);
    }
    return this.prisma.user.create({
      data: {
        user_email: user.user_email,
        user_name: user.user_name,
        user_last_name: user.user_last_name,
        user_second_last_name: user.user_second_last_name || null,
        user_national_id: user.user_national_id,
        user_birth_date: user.user_birth_date,
        role_name: user.role_name,
        id_credential: user.id_credential,
      },
    });
  }

  //Iniciar sesión
  async signIn(auth: SignInDto): Promise<{ access_token: string }> {
    const userAuth = await this.prisma.user.findUnique({
      where: { user_email: auth.user_email },
      include: {
        credential: {
          select: {
            id_credential: true,
            password_hash: true,
            provider: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    //Verificar correo
    if (!userAuth?.user_email) {
      throw new NotFoundException(ERROR_CODES.auth_email_not_found);
    }
    //Verificar estado de cuenta
    if (userAuth.active === false) {
      throw new NotFoundException(ERROR_CODES.auth_user_disabled);
    }

    //Hashear constraseña (Proveniente de React)
    const hashPassword = await this.hashPassword(auth.credential);

    //Obtener hash de base de datos
    const database_hash = userAuth.credential?.password_hash;

    //Verificar coincidencia de contraseña
    if (!(await this.verifyPassword(hashPassword, database_hash))) {
      throw new UnauthorizedException(ERROR_CODES.auth_password_not_match);
    }

    const payload: JWT = {
      sub: userAuth.id_user,
      name: userAuth.user_name,
      last_name: userAuth.user_last_name,
      email: userAuth.user_email,
      role: userAuth.role_name,
    };

    //Firmar y retornar Token JWT
    return await this.signJWT(payload);
  }

  // => Hacer login sin credenciales (solo entorno desarrollo)
  async devSignIn(): Promise<{ access_token: string }> {
    const payload: JWT = {
      sub: 1,
      name: 'dev_user',
      last_name: 'account',
      email: 'devgamecenter@gmail.com',
      role: Role.Admin,
    };
    return await this.signJWT(payload);
  }

  async signJWT(payload: JWT): Promise<{ access_token: string }> {
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async hashPassword(password_hash: string): Promise<string> {
    const saltOrRounds = 10;
    const password = password_hash;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }

  async verifyPassword(
    password_hash: string,
    database_hash: string,
  ): Promise<boolean> {
    //Comparar y verificar coincidencia entre hashes
    return await bcrypt.compare(password_hash, database_hash);
  }
}
