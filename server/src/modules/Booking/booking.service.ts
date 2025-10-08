import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../Prisma/prisma.service';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  GetBookings() {
    //Consultas con PRISMA
    return this.prisma.booking.findMany();
  }
}
