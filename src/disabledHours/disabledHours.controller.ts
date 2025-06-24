import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisabledHoursService } from './disabledHours.service';
import { CreateDisabledHoursDto } from './dto/create-disabledHours.dto';
import { ObjectId } from 'mongoose';

@Controller('disabled-hours')
export class DisabledHoursController {
  constructor(private readonly disabledHoursService: DisabledHoursService) {}

  @Post()
  create(@Body() createDisabledHoursDto: CreateDisabledHoursDto) {
    return this.disabledHoursService.create(createDisabledHoursDto);
  }

  @Get()
  findAll() {
    return this.disabledHoursService.findAll();
  }

  @Delete(':date/:hour')
  remove(@Param('date') date: string, @Param('hour') hour: string) {
    return this.disabledHoursService.remove(date, hour);
  }

}
