import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../Prisma/prisma.service';
import { ERROR_CODES } from '../../common/errors/response-errors';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import {
  Game,
  GameConsole,
  GameGenre,
  GameXConsole,
} from './interfaces/game.interface';
import { CreateGameGenreDto } from './dto/game-genre/create-game-genre.dto';
import { CreateGameConsoleDto } from './dto/game-console/create-game-console.dto';
import { CreateGameXConsoleDto } from './dto/game-x-console/create-game-x-console.dto';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}
  //#region [Game]
  async createGame(game: CreateGameDto): Promise<Game> {
    if (await this.existTitle(game.game_title)) {
      throw new ConflictException(ERROR_CODES.game_title_duplicated);
    }
    return this.prisma.game.create({
      data: {
        game_title: game.game_title,
        game_description: game.game_description || null,
        game_release_date: game.game_release_date,
        id_game_genre: game.id_game_genre || null,
      },
    });
  }

  async findOne(id_game: number | string): Promise<Game> {
    // Acepta id numerico o uuid
    const gameId =
      typeof id_game === 'number'
        ? id_game
        : // si es uuid (string) busca el id numerico (más eficiente)
          ((await this.findGameId(id_game)) ??
          (() => {
            throw new NotFoundException(ERROR_CODES.game_not_found);
          })());
    const game = await this.prisma.game.findFirst({
      where: { id_game: gameId, active: true },
    });
    if (!game) {
      throw new NotFoundException(ERROR_CODES.game_not_found);
    }
    return game;
  }

  async existTitle(game_title: string): Promise<boolean> {
    if (!game_title) {
      return false;
    }
    const count = await this.prisma.game.count({
      where: {
        active: true,
        game_title: { mode: 'insensitive', equals: game_title.trim() },
      },
    });
    return count > 0;
  }

  async findAllGames(): Promise<Game[]> {
    return this.prisma.game.findMany({
      where: { active: true },
    });
  }

  async findGameId(game_uuid: string): Promise<number> {
    const game = await this.prisma.game.findUnique({
      where: { game_uuid },
      select: { id_game: true },
    });
    if (!game) {
      throw new NotFoundException();
    }
    return game.id_game;
  }

  async updateGame(
    game_uuid: string,
    updateGameDto: UpdateGameDto,
  ): Promise<Game | void> {
    const gameId = await this.findGameId(game_uuid);
    if (!gameId) {
      throw new NotFoundException(ERROR_CODES.game_not_found);
    }

    // Verificar que el usuario exista antes de actualizar
    const exist = await this.findOne(gameId);
    if (!exist) {
      throw new NotFoundException(ERROR_CODES.game_not_found);
    }
    return this.prisma.game.update({
      where: { id_game: gameId },
      data: {
        game_title: updateGameDto.game_title,
        game_description: updateGameDto.game_description || null,
        game_release_date: updateGameDto.game_release_date,
        id_game_genre: updateGameDto.id_game_genre || null,
      },
    });
  }

  async deactivateGame(game_uuid: string): Promise<Game> {
    const gameId = await this.findGameId(game_uuid);
    if (!gameId) {
      throw new NotFoundException(ERROR_CODES.game_not_found);
    }
    const exist = await this.findOne(gameId);
    if (!exist) {
      throw new NotFoundException(ERROR_CODES.game_not_found);
    }
    return this.prisma.game.update({
      where: { id_game: gameId },
      data: { active: false },
    });
  }

  //#endregion Game

  //#region [game genre]
  async createGenre(genre: CreateGameGenreDto): Promise<GameGenre> {
    const exist = await this.existGenre(genre.id_game_genre);
    if (!exist) {
      throw new NotFoundException(ERROR_CODES.game_genre_name_duplicated);
    }
    return this.prisma.game_genre.create({
      data: { genre_name: genre.genre_name },
    });
  }

  async findAllGameGenre(): Promise<GameGenre[]> {
    return this.prisma.game_genre.findMany();
  }

  async existGenre(id_game_genre: number): Promise<boolean> {
    if (!id_game_genre) {
      return false;
    }
    const count = await this.prisma.game_genre.count({
      where: {
        genre_name: { mode: 'insensitive' },
      },
    });
    return count > 0;
  }

  async deleteGenre(id_game_genre: number): Promise<GameGenre> {
    return this.prisma.game_genre.delete({
      where: { id_game_genre: id_game_genre },
    });
  }
  //#endregion

  //#region [console]
  async createGameConsle(
    game_console: CreateGameConsoleDto,
  ): Promise<GameConsole> {
    const exist = await this.existGenre(game_console.id_game_console);
    if (!exist) {
      throw new NotFoundException(ERROR_CODES.game_console_name_duplicated);
    }
    return this.prisma.game_console.create({
      data: {
        game_console_name: game_console.game_console_name,
      },
    });
  }

  async findAllGameConsole(): Promise<GameConsole[]> {
    return this.prisma.game_console.findMany();
  }

  async existGameConsole(id_game_console: number): Promise<boolean> {
    if (!id_game_console) {
      return false;
    }
    const count = await this.prisma.game_console.count({
      where: {
        game_console_name: { mode: 'insensitive' },
      },
    });
    return count > 0;
  }

  async deleteGameConsole(id_game_console: number): Promise<GameConsole> {
    return this.prisma.game_console.delete({
      where: { id_game_console: id_game_console },
    });
  }
  //#endregion

  //#region [game per console]
  async createGameXConsole(GXC: CreateGameXConsoleDto): Promise<GameXConsole> {
    return this.prisma.game_x_console.create({
      data: { id_game_console: GXC.id_game_console, id_game: GXC.id_game },
    });
  }

  findAllGameXConsole(): Promise<GameXConsole[]> {
    return this.prisma.game_x_console.findMany();
  }

  async deleteGameXConsole(id: number): Promise<GameXConsole> {
    return this.prisma.game_x_console.delete({
      where: { id: id },
    });
  }
  //#endregion
}
