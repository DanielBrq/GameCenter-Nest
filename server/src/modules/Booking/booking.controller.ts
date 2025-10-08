import { Controller, Get } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Get('/')
  getAllBooking() {
    return this.bookingService.GetBookings();
  }
}
