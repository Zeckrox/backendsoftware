import { Document, Types } from 'mongoose';
export declare class Reservation extends Document {
    userId: Types.ObjectId;
    tableId?: Types.ObjectId;
    cubicleId?: Types.ObjectId;
    date: Date;
    timeblocks: number[];
    number: number;
    floorNumber: string;
    room: string;
    weekday?: string;
}
export declare const ReservationSchema: import("mongoose").Schema<Reservation, import("mongoose").Model<Reservation, any, any, any, Document<unknown, any, Reservation, any> & Reservation & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Reservation, Document<unknown, {}, import("mongoose").FlatRecord<Reservation>, {}> & import("mongoose").FlatRecord<Reservation> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
