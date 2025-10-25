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

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @IsOptional()
  readonly user_email?: string;

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
  @MinLength(8)
  @IsNotEmpty()
  readonly user_national_id: string;

  @IsDate()
  @IsNotEmpty()
  readonly user_birth_date: Date;

  // FK
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly id_role?: number;

  @IsInt()
  @Min(1)
  @IsOptional()
  readonly id_credential?: number;
}
