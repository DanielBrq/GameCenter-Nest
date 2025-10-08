import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGameGenreDto {
  @IsString()
  @IsNotEmpty()
  genre_name: string;
}
