import { Module } from '@nestjs/common';
import { GameGenreController } from './game-genre.controller';

@Module({
  controllers: [GameGenreController],
})
export class GamesGenreModule {}
