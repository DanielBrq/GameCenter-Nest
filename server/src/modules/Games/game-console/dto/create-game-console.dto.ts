import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGameConsoleDto {
  @IsString()
  @IsNotEmpty()
  game_console_uuid: string;

  @IsString()
  @IsNotEmpty()
  game_console_name: string;
}
