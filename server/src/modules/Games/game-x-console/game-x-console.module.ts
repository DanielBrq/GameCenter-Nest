import { Module } from '@nestjs/common';
import { ConsoleController } from './game-x-console.controller';

@Module({
  controllers: [ConsoleController],
})
export class ConsoleModule {}
