import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsInt,
  IsString,
  MinLength,
  IsOptional,
} from 'class-validator';

export class updateGameDto {
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  game_uuid: string;

  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  game_title: string;

  @IsString()
  @MinLength(1)
  @IsOptional()
  game_description?: string;

  @IsDate()
  @IsNotEmpty()
  game_release_date: Date;

  @IsBoolean()
  @IsNotEmpty()
  active: boolean;

  //Fk
  @IsInt()
  @IsNotEmpty()
  id_game_genre: number;
}
