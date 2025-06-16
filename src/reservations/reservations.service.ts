import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Reservation } from './schema/reservation.schema';
import { Model, Types } from 'mongoose';
import { GetAvailableSpotsDto } from './dto/get-available-spots.dto';
import { startTimeOptions } from './utils/timeOptions';
import { TablesService } from 'src/tables/tables.service';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectModel(Reservation.name) private reservationModel: Model<Reservation>,
    private readonly tablesService: TablesService, //importo paquete de servicio
  ) {}

  async createReservation(createReservationDto: CreateReservationDto) {
    if (createReservationDto.type === 'table') {
      return await this.createTableReservation(createReservationDto);
    } else if (createReservationDto.type === 'cubicle') {
      return await this.createCubicleReservation(createReservationDto);
    }
  }

  async createTableReservation(createReservationDto: CreateReservationDto) {
    const idTable = await this.tablesService.getTableByNumber(createReservationDto.number);
    const startTimeOptionsIndex = startTimeOptions.findIndex(
      (element) => element === createReservationDto.startTime,
    );
    //arriba vas a conseguir el index en el array del utils startTimeOption donde el string de startTime coincida con el de este array en ese index
    const timeblocks: number[] = [];

    // if (!startTimeOptionsIndex) return;
    if (startTimeOptionsIndex === -1) {
      throw new BadRequestException('Hora de inicio no válida.');
    }
    for (let i = 0; i < createReservationDto.duration / 30; i++) {
      timeblocks.push(startTimeOptionsIndex + 1 + i);
    }

    console.log(timeblocks);
    try {
      const createdReservation = new this.reservationModel({
        ...createReservationDto,
        userId: new Types.ObjectId(createReservationDto.userId),
        tableId: idTable,
        timeblocks: timeblocks,
      });
      return await createdReservation.save();
    } catch (error) {
      throw new Error(`Error creating reservation: ${error.message}`);
    }
  }

  async createCubicleReservation(createReservationDto: CreateReservationDto) {}

  async findAll() {
    try {
      return await this.reservationModel.find().exec();
    } catch (error) {
      throw new Error(`Error fetching cubicles: ${error.message}`);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }

  async getAvailableSpots(getAvailableSpotsDto: GetAvailableSpotsDto) {
    const startTimeOptionsIndex = startTimeOptions.findIndex(
      (element) => element === getAvailableSpotsDto.startTime,
    );
    //arriba vas a conseguir el index en el array del utils startTimeOption donde el string de startTime coincida con el de este array en ese index
    const timeblocks: number[] = [];

    if (!startTimeOptionsIndex) return;
    for (let i = 0; i < getAvailableSpotsDto.duration / 30; i++) {
      timeblocks.push(startTimeOptionsIndex + 1 + i);
    }

    // console.log(timeblocks);
    if (getAvailableSpotsDto.type === 'table') {
      return await this.getAvailableTables(getAvailableSpotsDto.date, timeblocks);
    } else if (getAvailableSpotsDto.type === 'cubicle') {
      return await this.getAvailableCubicles(getAvailableSpotsDto.date, timeblocks);
    }
  }

  async getAvailableCubicles(findDate: Date, findTimeblocks: number[]) {
    const result = await this.reservationModel
      .find({
        tableId: { $exists: false },
        cubicleId: { $exists: true },
        date: findDate,
        timeblocks: { $in: findTimeblocks },
      })
      .populate('cubicleId', 'floorNumber room');
    return result;
  }

  async getAvailableTables(findDate: Date, findTimeblocks: number[]) {
    const result = await this.reservationModel
      .find({
        tableId: { $exists: true },
        cubicleId: { $exists: false },
        date: findDate,
        timeblocks: { $in: findTimeblocks },
      })
      .populate('tableId', 'number floorNumber room');
    return result;
  }
}
