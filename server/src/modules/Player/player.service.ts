import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../Prisma/prisma.service';
import { Player } from './interfaces/player.interface';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { ERROR_CODES } from './../../common/errors/response-errors';

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) {}

  async createPlayer(player: CreatePlayerDto): Promise<Player> {
    if (await this.existNationalId(player.player_national_id)) {
      throw new ConflictException(ERROR_CODES.player_national_id_duplicated);
    }
    return this.prisma.player.create({
      data: {
        player_name: player.player_name,
        player_last_name: player.player_last_name,
        player_second_last_name: player.player_second_last_name || null,
        player_last_visit: player.player_last_visit || null,
        player_birth_date: player.player_birth_date,
        player_national_id: player.player_national_id || null,
      },
    });
  }

  async findAll(): Promise<Player[]> {
    return this.prisma.player.findMany({
      where: { active: true },
    });
  }

  async findOne(id_player: number | string): Promise<Player> {
    const playerId =
      typeof id_player === 'number'
        ? id_player
        : // si es uuid (string) busca el id numerico (más eficiente)
          ((await this.findPlayerId(id_player)) ??
          (() => {
            throw new NotFoundException(ERROR_CODES.player_not_found);
          })());
    const player = await this.prisma.player.findFirst({
      where: { id_player: playerId, active: true },
    });
    if (!player) {
      throw new NotFoundException(ERROR_CODES.player_not_found);
    }
    return player;
  }

  async existNationalId(player_national_id?: string | null): Promise<boolean> {
    if (!player_national_id) {
      return false;
    }
    const count = await this.prisma.player.count({
      where: {
        active: true,
        player_national_id: {
          mode: 'insensitive',
          equals: player_national_id.trim(),
        },
      },
    });
    return count > 0;
  }

  async findPlayerId(player_uuid: string): Promise<number> {
    const player = await this.prisma.player.findUnique({
      where: { player_uuid },
      select: { id_player: true },
    });
    if (!player) {
      throw new NotFoundException(ERROR_CODES.player_not_found);
    }
    return player.id_player;
  }

  async updatePlayer(
    player_uuid: string,
    updatePlayerDto: UpdatePlayerDto,
  ): Promise<Player | void> {
    const playerId = await this.findPlayerId(player_uuid);
    if (!playerId) {
      throw new NotFoundException(ERROR_CODES.player_not_found);
    }

    // Verificar que el cliente existe antes de actualizar
    const exist = await this.findOne(playerId);
    if (!exist) {
      throw new NotFoundException(ERROR_CODES.player_not_found);
    }
    return this.prisma.player.update({
      where: { id_player: playerId },
      data: {
        player_name: updatePlayerDto.player_name,
        player_last_name: updatePlayerDto.player_last_name,
        player_second_last_name: updatePlayerDto.player_second_last_name,
        player_national_id: updatePlayerDto.player_national_id,
        player_birth_date: updatePlayerDto.player_birth_date,
        player_last_visit: updatePlayerDto.player_last_visit,
        player_black_list: updatePlayerDto.player_black_list,
      },
    });
  }

  async deactivatePlayer(player_uuid: string): Promise<Player> {
    const playerId = await this.findPlayerId(player_uuid);
    if (!playerId) {
      throw new NotFoundException(ERROR_CODES.player_not_found);
    }
    const exist = await this.findOne(playerId);
    if (!exist) {
      throw new NotFoundException(ERROR_CODES.player_not_found);
    }
    return this.prisma.player.update({
      where: { id_player: playerId },
      data: { active: false },
    });
  }
}
