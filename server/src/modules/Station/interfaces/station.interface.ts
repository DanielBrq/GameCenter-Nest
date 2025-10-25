export interface Station {
  id_station: number;
  station_uuid: string;
  station_name: string;
  station_status: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;

  //FK
  id_game_console?: number;
}
