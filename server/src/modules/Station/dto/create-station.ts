import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateStationDto {
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  readonly station_name: string;

  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  readonly station_status: string;

  //FK
  @IsNumber()
  readonly id_game_console: number;
}
