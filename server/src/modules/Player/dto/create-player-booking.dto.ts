import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePlayerBookingDto {
  @IsNumber()
  @IsNotEmpty()
  id_player: number;

  @IsNumber()
  @IsNotEmpty()
  id_booking: number;
}
