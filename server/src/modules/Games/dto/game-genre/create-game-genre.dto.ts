import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateGameGenreDto {
  @IsNumber()
  id_game_genre: number;

  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  genre_name: string;
}
