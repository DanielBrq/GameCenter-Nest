import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsDate,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';

export class CreateGameDto {
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  readonly game_title: string;

  @IsString()
  @MinLength(1)
  @IsOptional()
  readonly game_description?: string;

  @IsDate()
  @IsNotEmpty()
  readonly game_release_date: Date;

  //Fk
  @IsNumber()
  @Min(1)
  @IsOptional()
  readonly id_game_genre?: number;
}
