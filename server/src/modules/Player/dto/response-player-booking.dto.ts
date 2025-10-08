import { Expose } from 'class-transformer';

export class ResponsePlayerBookingDto {
  @Expose()
  id_player_x_booking: number;
  @Expose()
  id_player: number;
  @Expose()
  id_booking: number;
}
