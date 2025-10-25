import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../Prisma/prisma.service';
import { Booking } from './interfaces/booking.interface';
import { CreateBookingDto } from './dto/create-booking.dto';
import { ERROR_CODES } from 'src/common/errors/response-errors';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  async CreateBooking(booking: CreateBookingDto): Promise<Booking> {
    return this.prisma.booking.create({
      data: {
        booking_start_time: booking.booking_start_time,
        booking_end_time: booking.booking_end_time,
        booking_date: booking.booking_date,
        booking_status: booking.booking_status,
        booking_notes: booking.booking_notes || null,
        id_user: booking.id_user,
        id_station: booking.id_station,
      },
    });
  }

  async findAll(): Promise<Booking[]> {
    return this.prisma.booking.findMany({
      where: { active: true },
      include: {
        users: {
          select: {
            user_uuid: true,
            user_name: true,
            user_last_name: true,
            user_second_last_name: true,
          },
        },
        station: {
          select: {
            station_uuid: true,
            station_name: true,
            station_status: true,
          },
        },
      },
    });
  }

  async findOne(id_booking: number | string): Promise<Booking> {
    // Acepta id numerico o uuid
    const bookingId =
      typeof id_booking === 'number'
        ? id_booking
        : // si es uuid (string) busca el id numerico
          ((await this.findBookingId(id_booking)) ??
          (() => {
            throw new NotFoundException(ERROR_CODES.booking_not_found);
          })());

    const booking = await this.prisma.booking.findFirst({
      where: { id_booking: bookingId, active: true },
      include: {
        users: {
          select: {
            user_uuid: true,
            user_name: true,
            user_last_name: true,
            user_second_last_name: true,
          },
        },
        station: {
          select: {
            station_uuid: true,
            station_name: true,
            station_status: true,
          },
        },
      },
    });
    if (!booking) {
      throw new NotFoundException(ERROR_CODES.booking_not_found);
    }
    return booking;
  }

  async findBookingId(booking_uuid: string): Promise<number> {
    const booking = await this.prisma.booking.findUnique({
      where: { booking_uuid },
      select: { id_booking: true },
    });
    if (!booking) {
      throw new NotFoundException(ERROR_CODES.booking_not_found);
    }
    return booking.id_booking;
  }

  async updateBooking(
    updateBookingDto: UpdateBookingDto,
    booking_uuid: string,
  ): Promise<Booking | void> {
    const bookingId = await this.findBookingId(booking_uuid);
    if (!bookingId) {
      throw new NotFoundException(ERROR_CODES.booking_not_found);
    }

    // Verificar que la reserva exista antes de actualizar
    const exist = await this.findOne(bookingId);
    if (!exist) {
      throw new NotFoundException(ERROR_CODES.booking_not_found);
    }

    return this.prisma.booking.update({
      where: { id_booking: bookingId, active: true },
      data: {
        booking_start_time: updateBookingDto.booking_start_time,
        booking_end_time: updateBookingDto.booking_end_time,
        booking_date: updateBookingDto.booking_date,
        booking_status: updateBookingDto.booking_status,
        booking_notes: updateBookingDto.booking_notes || null,
        id_user: updateBookingDto.id_user,
        id_station: updateBookingDto.id_station,
      },
    });
  }

  async deactivateUser(booking_uuid: string): Promise<Booking> {
    const bookingId = await this.findBookingId(booking_uuid);
    if (!bookingId) {
      throw new NotFoundException(ERROR_CODES.booking_not_found);
    }
    const exist = await this.findOne(bookingId);
    if (!exist) {
      throw new NotFoundException(ERROR_CODES.booking_not_found);
    }
    return this.prisma.booking.update({
      where: { id_booking: bookingId },
      data: { active: false },
    });
  }
}
