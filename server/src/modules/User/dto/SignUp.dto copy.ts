import {
  IsDate,
  IsNotEmpty,
  IsString,
  MinLength,
  IsEmail,
  IsOptional,
  IsInt,
  Min,
} from 'class-validator';

export class SignUpDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly user_email: string;

  
}
