import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../Prisma/prisma.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ERROR_CODES } from '../../common/errors/response-errors';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(user: CreateUserDto): Promise<User> {
    //verificar correo unico
    if (await this.existEmail(user.user_email)) {
      throw new ConflictException(ERROR_CODES.user_duplicated_email);
    }
    //verificar identificación nacional unico
    if (await this.existNationalId(user.user_national_id)) {
      throw new ConflictException(ERROR_CODES.user_duplicated_identity);
    }
    return this.prisma.user.create({
      data: {
        user_email: user.user_email || null,
        user_name: user.user_name,
        user_last_name: user.user_last_name,
        user_second_last_name: user.user_second_last_name || null,
        user_national_id: user.user_national_id,
        user_birth_date: user.user_birth_date,
        id_role: user.id_role,
        id_credential: user.id_credential,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      where: { active: true },
      include: {
        role: {
          select: {
            role_name: true,
            role_permissions: true,
          },
        },
      },
    });
  }

  async findOne(id_user: number | string): Promise<User> {
    // Acepta id numerico o uuid
    const userId =
      typeof id_user === 'number'
        ? id_user
        : // si es uuid (string) busca el id numerico
          ((await this.findUserId(id_user)) ??
          (() => {
            throw new NotFoundException(ERROR_CODES.user_not_found);
          })());

    const user = await this.prisma.user.findFirst({
      where: { id_user: userId, active: true },
      include: {
        role: {
          select: {
            role_name: true,
            role_permissions: true,
          },
        },
      },
    });
    if (!user) {
      throw new NotFoundException(ERROR_CODES.user_not_found);
    }
    return user;
  }

  async existEmail(user_email?: string | null): Promise<boolean> {
    if (!user_email) {
      return false;
    }
    const count = await this.prisma.user.count({
      where: {
        active: true,
        user_email: { mode: 'insensitive', equals: user_email.trim() },
      },
    });
    return count > 0;
  }

  async existNationalId(user_national_id: string): Promise<boolean> {
    const count = await this.prisma.user.count({
      where: { active: true, user_national_id },
    });
    return count > 0;
  }

  async findUserId(user_uuid: string): Promise<number> {
    const user = await this.prisma.user.findUnique({
      where: { user_uuid },
      select: { id_user: true },
    });
    if (!user) {
      throw new NotFoundException(ERROR_CODES.user_not_found);
    }
    return user.id_user;
  }

  async updateUser(
    user_uuid: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User | void> {
    const userId = await this.findUserId(user_uuid);
    if (!userId) {
      throw new NotFoundException(ERROR_CODES.user_not_found);
    }

    // Verificar que el usuario exista antes de actualizar
    const exist = await this.findOne(userId);
    if (!exist) {
      throw new NotFoundException(ERROR_CODES.user_not_found);
    }
    return this.prisma.user.update({
      where: { id_user: userId },
      data: {
        user_email: updateUserDto.user_email,
        user_name: updateUserDto.user_name,
        user_last_name: updateUserDto.user_last_name,
        user_second_last_name: updateUserDto.user_second_last_name,
        id_role: updateUserDto.id_role,
        id_credential: updateUserDto.id_credential,
      },
    });
  }

  async deactivateUser(user_uuid: string): Promise<User> {
    const userId = await this.findUserId(user_uuid);
    if (!userId) {
      throw new NotFoundException(ERROR_CODES.user_not_found);
    }
    const exist = await this.findOne(userId);
    if (!exist) {
      throw new NotFoundException(ERROR_CODES.user_not_found);
    }
    return this.prisma.user.update({
      where: { id_user: userId },
      data: { active: false },
    });
  }
}
