import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './schema/reservation.schema';
import { Model } from 'mongoose';
import { GetAvailableSpotsDto } from './dto/get-available-spots.dto';
import { TablesService } from 'src/tables/tables.service';
export declare class ReservationsService {
    private reservationModel;
    private readonly tablesService;
    constructor(reservationModel: Model<Reservation>, tablesService: TablesService);
    createReservation(createReservationDto: CreateReservationDto): Promise<void | (import("mongoose").Document<unknown, {}, Reservation, {}> & Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })>;
    createTableReservation(createReservationDto: CreateReservationDto): Promise<import("mongoose").Document<unknown, {}, Reservation, {}> & Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createCubicleReservation(createReservationDto: CreateReservationDto): Promise<void>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Reservation, {}> & Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: number): string;
    update(id: number, updateReservationDto: UpdateReservationDto): string;
    remove(id: number): string;
    getAvailableSpots(getAvailableSpotsDto: GetAvailableSpotsDto): Promise<(import("mongoose").Document<unknown, {}, Reservation, {}> & Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[] | undefined>;
    getAvailableCubicles(findDate: Date, findTimeblocks: number[]): Promise<(import("mongoose").Document<unknown, {}, Reservation, {}> & Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getAvailableTables(findDate: Date, findTimeblocks: number[]): Promise<(import("mongoose").Document<unknown, {}, Reservation, {}> & Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
