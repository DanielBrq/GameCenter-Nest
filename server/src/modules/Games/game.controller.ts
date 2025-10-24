import {
  Controller,
  Post,
  Body,
  Get,
  HttpStatus,
  HttpCode,
  Param,
  Patch,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { ResponseGameDto } from './dto/response-game.dto';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  async createGame(@Body() createGameDto: CreateGameDto) {
    await this.gameService.createGame(createGameDto);
  }

  @Get('/get-all')
  async getAllGames(): Promise<ResponseGameDto[]> {
    const game = await this.gameService.findAllGames();
    return plainToInstance(ResponseGameDto, game);
  }

  @Get('/get/:game_uuid')
  async getGame(
    @Param('game_uuid') game_uuid: string,
  ): Promise<ResponseGameDto> {
    const games = await this.gameService.findOne(game_uuid);
    return plainToInstance(ResponseGameDto, games);
  }

  @Patch('/update/:game_uuid')
  @HttpCode(HttpStatus.OK)
  async updateGame(
    @Param('game_uuid') game_uuid: string,
    @Body() updateGameDto: UpdateGameDto,
  ) {
    await this.gameService.updateGame(game_uuid, updateGameDto);
  }

  @Patch('/deactivate/:game_uuid')
  @HttpCode(HttpStatus.OK)
  async deactivateGame(@Param('game_uuid') game_uuid: string) {
    await this.gameService.deactivateGame(game_uuid);
  }
}
