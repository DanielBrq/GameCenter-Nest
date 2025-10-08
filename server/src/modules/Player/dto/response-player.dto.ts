import { Exclude, Expose } from 'class-transformer';

export class ResponsePlayerDto {
  @Exclude()
  readonly id_player: number;

  @Expose()
  readonly player_uuid: string;

  @Expose()
  readonly player_name: string;

  @Expose()
  readonly player_last_name: string;

  @Expose()
  readonly player_second_last_name: string;

  @Expose()
  readonly player_birth_date: Date;

  @Expose()
  readonly player_national_id: string;

  @Expose()
  readonly player_last_visit: Date;

  @Exclude()
  readonly player_black_list: boolean;

  @Exclude()
  readonly active: boolean;
}
