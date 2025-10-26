import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsEmail,
  IsOptional,
  IsInt,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly user_uuid: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly user_email: string;

  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  readonly user_name: string;

  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  readonly user_last_name: string;

  @IsString()
  @MinLength(1)
  @IsOptional()
  readonly user_second_last_name?: string;

  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  readonly role_name: string;

  // FK
  @IsInt()
  @IsOptional()
  readonly id_credential?: number;
}
