import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisabledDayService } from './disabledDays.service';
import { CreateDisabledDayDto } from './dto/create-disabledDay.dto';
import { ObjectId } from 'mongoose';

@Controller('disabled-days')
export class DisabledDayController {
  constructor(private readonly disabledDayService: DisabledDayService) {}

  @Post()
  create(@Body() createDisabledDayDto: CreateDisabledDayDto) {
    return this.disabledDayService.create(createDisabledDayDto);
  }

  @Get()
  findAll() {
    return this.disabledDayService.findAll();
  }

  @Delete(':date')
  remove(@Param('date') date: string) {
    return this.disabledDayService.remove(date);
  }

}
