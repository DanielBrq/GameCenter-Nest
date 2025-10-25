import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsOptional,
  IsInt,
  IsDate,
} from 'class-validator';

export class UpdateBookingDto {
  @IsString()
  @IsNotEmpty()
  readonly booking_uuid: string;

  @IsDate()
  @IsNotEmpty()
  readonly booking_start_time: Date;

  @IsDate()
  @IsNotEmpty()
  readonly booking_end_time: Date;

  @IsDate()
  @IsNotEmpty()
  readonly booking_date: Date;

  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  readonly booking_status: string;

  @IsString()
  @MinLength(1)
  @IsOptional()
  readonly booking_notes?: string;

  //FK
  @IsInt()
  @IsOptional()
  readonly id_user: number;
  @IsInt()
  @IsOptional()
  readonly id_station: number;
}
