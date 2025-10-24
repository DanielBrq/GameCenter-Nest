import { Exclude } from 'class-transformer';

export class ResponseGameXConsoleDto {
  @Exclude()
  id_game_console: number;
  //incluiir columnas de game-console

  @Exclude()
  id_game: number;
  //incluiir columnas de game
}
