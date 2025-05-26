import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Controller("users")
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  async show(): Promise<User[]> {
    return await this.appService.findAll();
  }

  @Post()
  create(@Body() newUser: CreateUserDto){
    this.appService.create(newUser);
  }
}
