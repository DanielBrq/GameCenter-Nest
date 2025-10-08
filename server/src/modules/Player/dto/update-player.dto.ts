import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdatePlayerDto {
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  readonly player_uuid: string;

  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  readonly player_name: string;

  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  readonly player_last_name: string;

  @IsString()
  @MinLength(1)
  @IsOptional()
  readonly player_second_last_name?: string;

  @IsDate()
  @IsNotEmpty()
  readonly player_birth_date: Date;

  @IsString()
  @MinLength(1)
  @IsOptional()
  readonly player_national_id?: string;

  @IsDate()
  @IsNotEmpty()
  readonly player_last_visit: Date;

  @IsBoolean()
  @IsNotEmpty()
  readonly player_black_list: boolean;
}
