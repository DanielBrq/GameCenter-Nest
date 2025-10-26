import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  Matches,
  MinLength,
} from 'class-validator';

export class SignInDto {
  @IsEmail()
  @IsNotEmpty({
    message: 'El campo de correo electrónico es requerido.',
  })
  readonly user_email: string;

  @IsString()
  @MinLength(8, {
    message: 'La contraseña debe tener al menos 8 caracteres.',
  })
  @MaxLength(32)
  @IsNotEmpty()
  @Matches(/[A-Z]/, {
    message: 'La contraseña debe tener al menos una letra mayúscula.',
  })
  @Matches(/(?:.*\d){2,}/, {
    message: 'La contraseña debe tener al menos dos números.',
  })
  @Matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, {
    message: 'La contraseña debe tener al menos un carácter especial.',
  })
  readonly credential: string;
}
