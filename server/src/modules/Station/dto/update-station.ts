import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateStationDto {
  @IsNumber()
  @IsNotEmpty()
  readonly id_station: number;

  @IsString()
  @IsNotEmpty()
  readonly station_uuid: string;

  @IsString()
  @IsNotEmpty()
  readonly station_name: string;

  @IsString()
  @IsNotEmpty()
  readonly station_status: string;

  @IsNumber()
  @IsOptional()
  readonly id_game_console?: number | null;
}
