import { Exclude, Expose } from 'class-transformer';

export class StationResponseDto {
  @Exclude()
  id_station: number;

  @Expose()
  station_uuid: string;

  @Expose()
  station_name: string;

  @Expose()
  station_status: string;

  @Exclude()
  active: boolean;

  //FK
  @Exclude()
  id_game_console: number;
}
