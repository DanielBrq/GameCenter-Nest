import {
  Controller,
  Body,
  Get,
  HttpStatus,
  HttpCode,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Role } from '../Auth/enums/role.enum';
import { UserService } from './user.service';
import { ResponseUserDto } from './dto/response-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { plainToInstance } from 'class-transformer';

@Controller('users')
@UseGuards(RolesGuard)
export class UserController {
  constructor(private userService: UserService) { }

  @Get('/get-all')
  @Roles(Role.Admin)
  async getAllUsers(): Promise<ResponseUserDto[]> {
    const users = await this.userService.findAll();
    return plainToInstance(ResponseUserDto, users);
  }

  @Get('/get/:user_uuid')
  @Roles(Role.Admin)
  async getUser(
    @Param('user_uuid') user_uuid: string,
  ): Promise<ResponseUserDto> {
    const users = await this.userService.findOne(user_uuid);
    return plainToInstance(ResponseUserDto, users);
  }

  @Patch('/update/:user_uuid')
  @Roles(Role.Admin)
  @HttpCode(HttpStatus.OK)
  async updateUser(
    @Param('user_uuid') user_uuid: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.userService.updateUser(user_uuid, updateUserDto);
  }

  @Patch('/deactivate/:user_uuid')
  @Roles(Role.Admin)
  @HttpCode(HttpStatus.OK)
  async deactivateUser(@Param('user_uuid') user_uuid: string) {
    await this.userService.deactivateUser(user_uuid);
  }
}
