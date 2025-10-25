import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../Prisma/prisma.service';
import { ERROR_CODES } from './../../common/errors/response-errors';
import { CreateStationDto } from './dto/create-station';
import { Station } from './interfaces/station.interface';
import { UpdateStationDto } from './dto/update-station';

const STATION_STATUS = {
  avaible: 'available',
  occupied: 'occupied',
  maintenance: 'maintenance',
};

@Injectable()
export class StationService {
  constructor(private prisma: PrismaService) {}

  async createStation(station: CreateStationDto): Promise<Station> {
    if (await this.existStationName(station.station_name)) {
      throw new ConflictException(ERROR_CODES.station_name_duplicated);
    }
    return this.prisma.station.create({
      data: {
        station_name: station.station_name,
        station_status: STATION_STATUS.avaible,
        id_game_console: station.id_game_console ?? null,
      },
    });
  }

  async findAll(): Promise<Station[]> {
    return this.prisma.station.findMany({
      where: { active: true },
    });
  }

  async findOne(id_station: number | string): Promise<Station> {
    const stationId =
      typeof id_station === 'number'
        ? id_station
        : ((await this.findStationId(id_station)) ??
          (() => {
            throw new NotFoundException(ERROR_CODES.station_not_found);
          })());
    const station = await this.prisma.station.findFirst({
      where: { id_station: stationId, active: true },
    });
    if (!station) {
      throw new NotFoundException(ERROR_CODES.station_not_found);
    }
    return station;
  }

  async existStationName(station_name: string): Promise<boolean> {
    const count = await this.prisma.station.count({
      where: { active: true, station_name },
    });
    return count > 0;
  }

  async findStationId(station_uuid: string): Promise<number> {
    const station = await this.prisma.station.findUnique({
      where: { station_uuid },
      select: { id_station: true },
    });
    if (!station) {
      throw new NotFoundException(ERROR_CODES.station_not_found);
    }
    return station.id_station;
  }

  async updateStation(
    station_uuid: string,
    updateStationDto: UpdateStationDto,
  ): Promise<Station | void> {
    const stationId = await this.findStationId(station_uuid);
    if (!stationId) {
      throw new NotFoundException(ERROR_CODES.station_not_found);
    }

    const exist = await this.findOne(stationId);
    if (!exist) {
      throw new NotFoundException(ERROR_CODES.station_not_found);
    }

    return this.prisma.station.update({
      where: { id_station: stationId },
      data: {
        station_name: updateStationDto.station_name,
        station_status: updateStationDto.station_status,
        id_game_console: updateStationDto.id_game_console,
      },
    });
  }

  async deactivateStation(station_uuid: string): Promise<Station> {
    const stationId = await this.findStationId(station_uuid);
    if (!stationId) {
      throw new NotFoundException(ERROR_CODES.station_not_found);
    }
    const exist = await this.findOne(stationId);
    if (!exist) {
      throw new NotFoundException(ERROR_CODES.station_not_found);
    }
    return this.prisma.station.update({
      where: { id_station: stationId },
      data: { active: false },
    });
  }
}
