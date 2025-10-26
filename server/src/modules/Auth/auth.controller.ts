import { Controller, Post, Get, Body, Query, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from '../User/dto/SignUp.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    // => Ruta en desarrollo
    @Get('dev-SignIn')
    async devSignIn(): Promise<{ access_token: string }> {
        // Verificar entorno
        if (process.env.NODE_ENV !== 'development') {
            throw new Error('Este endpoint solo está disponible en entorno de desarrollo');
        }
        return await this.authService.devSignIn();
    }
    // <= Ruta en desarrollo

    @Post('/signUp')
    async signUp(@Body() signUpDto: SignUpDto) {
        return await this.signUp(signUpDto)
    }

    @Post('/signIn')
    async signIn(@Body() signInDto: SignUpDto) {
        return await this.signUp(signInDto)
    }

}

