import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdatePlayerBookingDto {
  @IsNumber()
  @IsNotEmpty()
  id_player_x_booking: number;

  @IsNumber()
  @IsNotEmpty()
  id_player: number;

  @IsNumber()
  @IsNotEmpty()
  id_booking: number;
}
