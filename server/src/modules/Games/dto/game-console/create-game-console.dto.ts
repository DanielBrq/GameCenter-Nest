import { IsNotEmpty, IsString, MinLength, IsNumber } from 'class-validator';

export class CreateGameConsoleDto {
  @IsNumber()
  id_game_console: number;

  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  game_console_name: string;
}
