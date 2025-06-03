import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ObjectId } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { SignInDto } from 'src/auth/dto/sign-in.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {}

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

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.usersService.remove(id);
  }

  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
}
