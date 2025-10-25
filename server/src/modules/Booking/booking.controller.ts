import {
  Controller,
  Post,
  Body,
  Get,
  HttpStatus,
  HttpCode,
  Param,
  Patch,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ResponseBookingDto } from './dto/response-booking.dto';
import { plainToInstance } from 'class-transformer';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  async createBooking(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.CreateBooking(createBookingDto);
  }

  @Get('/get-all')
  async getAllBooking(): Promise<ResponseBookingDto[]> {
    const booking = await this.bookingService.findAll();
    return plainToInstance(ResponseBookingDto, booking);
  }

  @Get('/get/:booking_uuid')
  async getBooking(
    @Param('booking_uuid') booking_uuid: string,
  ): Promise<ResponseBookingDto> {
    const booking = await this.bookingService.findOne(booking_uuid);
    return plainToInstance(ResponseBookingDto, booking);
  }

  @Patch('/update/:booking_uuid')
  @HttpCode(HttpStatus.OK)
  async updateUser(
    @Param('booking_uuid') booking_uuid: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ) {
    await this.bookingService.updateBooking(updateBookingDto, booking_uuid);
  }

  @Patch('/deactivate/:user_uuid')
  @HttpCode(HttpStatus.OK)
  async deactivateUser(@Param('user_uuid') user_uuid: string) {
    await this.bookingService.deactivateUser(user_uuid);
  }
}
