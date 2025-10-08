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
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/response-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { plainToInstance } from 'class-transformer';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() createUserDto: CreateUserDto) {
    await this.userService.createUser(createUserDto);
  }

  @Get('/get-all')
  async getAllUsers(): Promise<UserResponseDto[]> {
    const users = await this.userService.findAll();
    return plainToInstance(UserResponseDto, users);
  }

  @Get('/get/:user_uuid')
  async getUser(
    @Param('user_uuid') user_uuid: string,
  ): Promise<UserResponseDto> {
    const users = await this.userService.findOne(user_uuid);
    return plainToInstance(UserResponseDto, users);
  }

  @Patch('/update/:user_uuid')
  @HttpCode(HttpStatus.OK)
  async updateUser(
    @Param('user_uuid') user_uuid: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.userService.updateUser(user_uuid, updateUserDto);
  }

  @Patch('/deactivate/:user_uuid')
  @HttpCode(HttpStatus.OK)
  async deactivateUser(@Param('user_uuid') user_uuid: string) {
    await this.userService.deactivateUser(user_uuid);
  }
}
