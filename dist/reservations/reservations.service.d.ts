import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './schema/reservation.schema';
import { Model } from 'mongoose';
import { GetAvailableSpotsDto } from './dto/get-available-spots.dto';
import { TablesService } from 'src/tables/tables.service';
import { CubiclesService } from 'src/cubicles/cubicles.service';
export declare class ReservationsService {
    private reservationModel;
    private readonly tablesService;
    private readonly cubiclesService;
    constructor(reservationModel: Model<Reservation>, tablesService: TablesService, cubiclesService: CubiclesService);
    createReservation(createReservationDto: CreateReservationDto): Promise<(import("mongoose").Document<unknown, {}, Reservation, {}> & Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | undefined>;
    findByUserId(userId: string): Promise<(import("mongoose").Document<unknown, {}, Reservation, {}> & Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createTableReservation(createReservationDto: CreateReservationDto): Promise<import("mongoose").Document<unknown, {}, Reservation, {}> & Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createCubicleReservation(createReservationDto: CreateReservationDto): Promise<import("mongoose").Document<unknown, {}, Reservation, {}> & Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Reservation, {}> & Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: number): string;
    update(id: number, updateReservationDto: UpdateReservationDto): string;
    eliminarReserva(id: string): Promise<(import("mongoose").Document<unknown, {}, Reservation, {}> & Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
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
