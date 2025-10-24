export interface Game {
  id_game: number;
  game_uuid: string;
  game_title: string;
  game_description?: string | null;
  game_release_date: Date;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;

  //Fk
  id_game_genre?: number | null;
}

export interface GameGenre {
  id_game_genre: number;
  genre_name: string;
}

export interface GameConsole {
  id_game_console: number;
  game_console_uuid: string;
  game_console_name: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface GameXConsole {
  id: number;
  id_game_console: number;
  id_game: number;
}
