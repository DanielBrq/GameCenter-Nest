import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBookingDto {
  @IsDate()
  @IsNotEmpty()
  booking_start_time: Date;

  @IsDate()
  @IsNotEmpty()
  booking_end_time: Date;

  @IsDate()
  @IsNotEmpty()
  booking_date: Date;

  @IsString()
  @IsNotEmpty()
  booking_status: string;

  @IsString()
  @IsOptional()
  booking_notes?: string;

  //FK
  @IsNumber()
  @IsNotEmpty()
  id_user: number;

  @IsNumber()
  @IsNotEmpty()
  id_station: number;
}
