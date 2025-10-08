export interface Player {
  id_player: number;
  player_uuid: string;
  player_name: string;
  player_last_name: string;
  player_second_last_name?: string | null;
  player_birth_date: Date;
  player_national_id?: string | null;
  player_last_visit: Date | null;
  player_black_list: boolean;
  active: boolean;

  createdAt: Date;
  updatedAt: Date;
}
