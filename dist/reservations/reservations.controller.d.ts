import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { GetAvailableSpotsDto } from './dto/get-available-spots.dto';
export declare class ReservationsController {
    private readonly reservationsService;
    constructor(reservationsService: ReservationsService);
    createReservation(createReservationDto: CreateReservationDto): Promise<void | (import("mongoose").Document<unknown, {}, import("./schema/reservation.schema").Reservation, {}> & import("./schema/reservation.schema").Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/reservation.schema").Reservation, {}> & import("./schema/reservation.schema").Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getAvailableSpots(getAvailableSpotsDto: GetAvailableSpotsDto): Promise<(import("mongoose").Document<unknown, {}, import("./schema/reservation.schema").Reservation, {}> & import("./schema/reservation.schema").Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[] | undefined>;
    findOne(id: string): string;
    update(id: string, updateReservationDto: UpdateReservationDto): string;
    remove(id: string): string;
}
