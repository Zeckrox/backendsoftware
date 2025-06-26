import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { GetAvailableSpotsDto } from './dto/get-available-spots.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post('/createReservation')
  createReservation(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.createReservation(createReservationDto);
  }

  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  @Post('/availableSpots')
  async getAvailableSpots(@Body() getAvailableSpotsDto: GetAvailableSpotsDto) {
    return await this.reservationsService.getAvailableSpots(getAvailableSpotsDto);
  }

  @Get('/reservas-user/:id')
  async findByUser(@Param('id') userId: string) {
    return this.reservationsService.findByUserId(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    return this.reservationsService.update(+id, updateReservationDto);
  }

  @Delete(':id')
  async eliminarReserva(@Param('id') id: string) {
    return this.reservationsService.eliminarReserva(id);
  }
}
