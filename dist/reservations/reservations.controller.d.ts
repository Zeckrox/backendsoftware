import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { GetAvailableSpotsDto } from './dto/get-available-spots.dto';
export declare class ReservationsController {
    private readonly reservationsService;
    constructor(reservationsService: ReservationsService);
    createReservation(createReservationDto: CreateReservationDto): Promise<(import("mongoose").Document<unknown, {}, import("./schema/reservation.schema").Reservation, {}> & import("./schema/reservation.schema").Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | undefined>;
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
    findByUser(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/reservation.schema").Reservation, {}> & import("./schema/reservation.schema").Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): string;
    update(id: string, updateReservationDto: UpdateReservationDto): string;
    updatePeople(id: string, people: number): Promise<import("mongoose").Document<unknown, {}, import("./schema/reservation.schema").Reservation, {}> & import("./schema/reservation.schema").Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    eliminarReserva(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/reservation.schema").Reservation, {}> & import("./schema/reservation.schema").Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
