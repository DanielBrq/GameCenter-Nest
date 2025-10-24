import { Exclude, Expose } from 'class-transformer';

export class ResponseGameDto {
  @Exclude()
  id_game: number;

  @Expose()
  game_uuid: string;

  @Expose()
  game_title: string;

  @Expose()
  game_description: string;

  @Expose()
  game_release_date: Date;

  @Exclude()
  active: boolean;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  //Fk
  @Exclude()
  id_game_genre: number;
}
