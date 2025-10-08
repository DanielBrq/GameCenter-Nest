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
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { ResponsePlayerDto } from './dto/response-player.dto';
import { plainToInstance } from 'class-transformer';

@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  async createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    await this.playerService.createPlayer(createPlayerDto);
  }

  @Get('/get-all')
  async getAllPlayers(): Promise<ResponsePlayerDto[]> {
    const Players = await this.playerService.findAll();
    return plainToInstance(ResponsePlayerDto, Players);
  }

  @Get('/get/:player_uuid')
  async getPlayer(
    @Param('player_uuid') Player_uuid: string,
  ): Promise<ResponsePlayerDto> {
    const Players = await this.playerService.findOne(Player_uuid);
    return plainToInstance(ResponsePlayerDto, Players);
  }

  @Patch('/update/:player_uuid')
  @HttpCode(HttpStatus.OK)
  async updatePlayer(
    @Param('player_uuid') Player_uuid: string,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ) {
    await this.playerService.updatePlayer(Player_uuid, updatePlayerDto);
  }

  @Patch('/deactivate/:player_uuid')
  @HttpCode(HttpStatus.OK)
  async deactivatePlayer(@Param('player_uuid') Player_uuid: string) {
    await this.playerService.deactivatePlayer(Player_uuid);
  }
}
