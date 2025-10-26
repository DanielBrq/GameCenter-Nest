import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
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
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      },
      {
        name: 'medium',
        ttl: 10000,
        limit: 20
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100
      }
    ]),
    ConfigModule.forRoot(),
    PrismaModule,
    BookingModule,
    AuthModule,
    UsersModule,
    GameModule,
    PlayerModule,
    StationModule
  ],
})
export class AppModule { }
