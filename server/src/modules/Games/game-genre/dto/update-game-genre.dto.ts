import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateGameGenreDto {
  @IsString()
  @IsNotEmpty()
  genre_name: string;
}
