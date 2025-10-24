import { Module } from '@nestjs/common';
import { AuthModule } from './modules/Auth/auth.module';
import { BookingModule } from './modules/Booking/booking.module';
import { ConsoleModule } from './modules/Games/game-x-console/game-x-console.module';
import { GamesConsoleModule } from './modules/Games/game-console/games-console.module';
import { GamesGenreModule } from './modules/Games/game-genre/games-genre.module';
import { GameModule } from './modules/Games/game.module';
import { UsersModule } from './modules/Users/users.module';
import { PlayerModule } from './modules/Player/player.module';
import { StationModule } from './modules/Station/station.module';
import { PrismaModule } from './Prisma/prisma.module';

// Importar modulos
@Module({
  imports: [
    PrismaModule,
    BookingModule,
    AuthModule,
    UsersModule,
    GamesConsoleModule,
    GameModule,
    GamesGenreModule,
    ConsoleModule,
    PlayerModule,
    StationModule,
  ],
})
export class AppModule {}
