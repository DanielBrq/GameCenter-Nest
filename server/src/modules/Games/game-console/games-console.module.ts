import { Module } from '@nestjs/common';
import { GameConsoleController } from './game-console.controller';

@Module({
  controllers: [GameConsoleController],
})
export class GamesConsoleModule {}
