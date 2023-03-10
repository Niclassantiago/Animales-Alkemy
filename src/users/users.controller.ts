import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersDto } from './dto/users.dto';
import { User } from './entity/users.entity';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getDUserById(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.findById(id);
  }
  @Post()
  createUser(@Body() usersDto: UsersDto) {
    return this.usersService.insert(usersDto);
  }
  @Patch(':id')
  updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(updateUserDto, id);
  }
  @Delete(':id')
  deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.removeUser(id);
  }
}
