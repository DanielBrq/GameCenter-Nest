import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGameConsoleDto {
  @IsNumber()
  @IsNotEmpty()
  id_game_console: number;

  @IsString()
  @IsNotEmpty()
  game_console_uuid: string;

  @IsString()
  @IsNotEmpty()
  game_console_name: string;
}
