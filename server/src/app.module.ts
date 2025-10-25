import { Module } from '@nestjs/common';
import { AuthModule } from './modules/Auth/auth.module';
import { BookingModule } from './modules/Booking/booking.module';
import { GameModule } from './modules/Games/game.module';
import { UsersModule } from './modules/User/user.module';
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
    GameModule,
    PlayerModule,
    StationModule,
  ],
})
export class AppModule {}
