import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CubiclesService } from './cubicles.service';
import { CreateCubicleDto } from './dto/create-cubicle.dto';
import { UpdateCubicleDto } from './dto/update-cubicle.dto';

@Controller('cubicles')
export class CubiclesController {
  constructor(private readonly cubiclesService: CubiclesService) {}

  @Post('/create-cubicle')
  create(@Body() createCubicleDto: CreateCubicleDto) {
    return this.cubiclesService.create(createCubicleDto);
  }

  @Get()
  findAll() {
    return this.cubiclesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cubiclesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCubicleDto: UpdateCubicleDto) {
    return this.cubiclesService.update(id, updateCubicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cubiclesService.remove(id);
  }
}
