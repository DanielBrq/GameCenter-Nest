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
  id_game_genre: number;
}
