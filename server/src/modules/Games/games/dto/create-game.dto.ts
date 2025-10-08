import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsDate,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateGameDto {
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

  //Fk
  @IsNumber()
  @IsNotEmpty()
  id_game_genre: number;
}
