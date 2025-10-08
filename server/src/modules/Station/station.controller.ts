import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Param,
} from '@nestjs/common';
import { StationService } from './station.service';
import { CreateStationDto } from './dto/create-station';
import { UpdateStationDto } from './dto/update-station';
import { StationResponseDto } from './dto/response-station';
import { plainToInstance } from 'class-transformer';

@Controller('station')
export class StationController {
  constructor(private stationService: StationService) {}

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  async createStation(@Body() createStationDto: CreateStationDto) {
    await this.stationService.createStation(createStationDto);
  }

  @Get('/get-all')
  async getAllStation(): Promise<StationResponseDto[]> {
    const users = await this.stationService.findAll();
    return plainToInstance(StationResponseDto, users);
  }

  @Get('/get/:station_uuid')
  async getStation(
    @Param('station_uuid') station_uuid: string,
  ): Promise<StationResponseDto> {
    const station = await this.stationService.findOne(station_uuid);
    return plainToInstance(StationResponseDto, station);
  }

  @Patch('/update/:station_uuid')
  @HttpCode(HttpStatus.OK)
  async updateUser(
    @Param('station_uuid') station_uuid: string,
    @Body() updateStationDto: UpdateStationDto,
  ) {
    await this.stationService.updateStation(station_uuid, updateStationDto);
  }

  @Patch('/deactivate/:station_uuid')
  @HttpCode(HttpStatus.OK)
  async deactivateStation(@Param(':station_uuid') station_uuid: string) {
    await this.stationService.deactivateStation(station_uuid);
  }
}
