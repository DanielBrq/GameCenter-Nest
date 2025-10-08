import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateGameXConsoleDto {
  @IsInt()
  @IsNotEmpty()
  id_game_console: number;

  @IsInt()
  @IsNotEmpty()
  id_game: number;
}
