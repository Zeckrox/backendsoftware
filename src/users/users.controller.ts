import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ObjectId } from 'mongoose';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.usersService.findOne(id);
  }

  @Get('/findMyUser/:token')
  async findMyUser(@Param('token') token: string) {
    const decodedToken = await this.usersService.decodeToken(token);
    return this.usersService.findOne(decodedToken.id as ObjectId);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.usersService.remove(id);
  }
}
