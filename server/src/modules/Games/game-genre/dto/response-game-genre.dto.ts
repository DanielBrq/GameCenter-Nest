import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGameGenreDto {
  @IsNumber()
  @IsNotEmpty()
  id_game_genre: number;

  @IsString()
  @IsNotEmpty()
  genre_name: string;
}
