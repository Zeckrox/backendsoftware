import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Reservation } from './schema/reservation.schema';
import { Model, Types } from 'mongoose';
import { GetAvailableSpotsDto } from './dto/get-available-spots.dto';
import { startTimeOptions } from './utils/timeOptions';
import { TablesService } from 'src/tables/tables.service';
import { CubiclesService } from 'src/cubicles/cubicles.service';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectModel(Reservation.name) private reservationModel: Model<Reservation>,
    private readonly tablesService: TablesService, //importo paquete de servicio
    private readonly cubiclesService: CubiclesService, //importo paquete de servicio
  ) {}

  async createReservation(createReservationDto: CreateReservationDto) {
    if (createReservationDto.type === 'table') {
      return await this.createTableReservation(createReservationDto);
    } else if (createReservationDto.type === 'cubicle') {
      return await this.createCubicleReservation(createReservationDto);
    }
  }

  async findByUserId(userId: string) {
    try {
      const objectId = new Types.ObjectId(userId); //mongo no reconoce strings si son ids! recordar
      return await this.reservationModel
        .find({ userId: objectId })
        ?.populate('cubicleId', 'room')
        ?.populate('tableId', 'room')
        .exec();
    } catch (error) {
      throw new Error(`error en fetch de reservas de este user id: ${error.message}`);
    }
  }

  async updatePeople(id: string, people: number) {
    try {
      const objectId = new Types.ObjectId(id);
      const updatedReservation = await this.reservationModel.findByIdAndUpdate(
        objectId,
        { people: people },
        { new: true },
      );
      if (!updatedReservation) {
        throw new BadRequestException('reserva not found');
      }
      return updatedReservation;
    } catch (error) {
      throw new Error(`error actualizando cant de personas: ${error.message}`);
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
      throw new BadRequestException('hora de inicio invalida');
    }
    for (let i = 0; i < (createReservationDto.duration / 30)+1; i++) {
      timeblocks.push(startTimeOptionsIndex + i);
    }

    // console.log(timeblocks);
    try {
      const createdReservation = new this.reservationModel({
        ...createReservationDto,
        userId: new Types.ObjectId(createReservationDto.userId), //mongo no reconoce strings si son ids! recordar
        tableId: idTable,
        timeblocks: timeblocks,
      });
      return await createdReservation.save();
    } catch (error) {
      throw new Error(`error creando reserva: ${error.message}`);
    }
  }

  async createCubicleReservation(createReservationDto: CreateReservationDto) {
    const idCubicle = await this.cubiclesService.getCubicleByNumber(createReservationDto.number);
    const startTimeOptionsIndex = startTimeOptions.findIndex(
      (element) => element === createReservationDto.startTime,
    );
    //arriba vas a conseguir el index en el array del utils startTimeOption donde el string de startTime coincida con el de este array en ese index
    const timeblocks: number[] = [];

    // if (!startTimeOptionsIndex) return;
    if (startTimeOptionsIndex === -1) {
      throw new BadRequestException('hora de inicio invalida');
    }
    for (let i = 0; i < (createReservationDto.duration / 30)+1; i++) {
      timeblocks.push(startTimeOptionsIndex + i);
    }

    // console.log(timeblocks);
    try {
      const createdReservation = new this.reservationModel({
        ...createReservationDto,
        userId: new Types.ObjectId(createReservationDto.userId), //mongo no reconoce strings si son ids! recordar
        cubicleId: idCubicle,
        timeblocks: timeblocks,
      });
      return await createdReservation.save();
    } catch (error) {
      throw new Error(`error creando reserva: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.reservationModel.find().exec();
    } catch (error) {
      throw new Error(`error fetching reservations: ${error.message}`);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  async eliminarReserva(id: string) {
    const objectId = new Types.ObjectId(id); //mongo no reconoce strings si son ids! recordar
    return this.reservationModel.findByIdAndDelete(objectId);
  }

  async getAvailableSpots(getAvailableSpotsDto: GetAvailableSpotsDto) {
    const startTimeOptionsIndex = startTimeOptions.findIndex(
      (element) => element === getAvailableSpotsDto.startTime,
    );
    //arriba vas a conseguir el index en el array del utils startTimeOption donde el string de startTime coincida con el de este array en ese index
    const timeblocks: number[] = [];
    if (startTimeOptionsIndex < 0) return;
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
