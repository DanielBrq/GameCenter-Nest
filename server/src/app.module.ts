import { Module } from '@nestjs/common';
import { AuthModule } from './modules/Auth/auth.module';
import { BookingModule } from './modules/Booking/booking.module';
import { ConsoleModule } from './modules/Games/game-x-console/game-x-console.module';
import { GamesConsoleModule } from './modules/Games/game-console/games-console.module';
import { GamesGenreModule } from './modules/Games/game-genre/games-genre.module';
import { GamesModule } from './modules/Games/games/games.module';
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
    GamesModule,
    GamesGenreModule,
    ConsoleModule,
    PlayerModule,
    StationModule,
  ],
})
export class AppModule {}
