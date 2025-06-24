import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisabledDurationService } from './disabledDurations.service';
import { CreateDisabledDurationDto } from './dto/create-disabledDuration.dto';
import { ObjectId } from 'mongoose';

@Controller('disabled-durations')
export class DisabledDurationController {
  constructor(private readonly disabledDurationService: DisabledDurationService) {}

  @Post()
  create(@Body() createDisabledDurationDto: CreateDisabledDurationDto) {
    return this.disabledDurationService.create(createDisabledDurationDto);
  }

  @Get()
  findAll() {
    return this.disabledDurationService.findAll();
  }

  @Delete(':date/:duration')
  remove(@Param('date') date: string, @Param('duration') duration: number ) {
    return this.disabledDurationService.remove(date, duration);
  }

}
