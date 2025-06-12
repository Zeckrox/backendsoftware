import { Document } from 'mongoose';
export declare class Cubicle {
    number: number;
    floorNumber: number;
    room?: string;
    isAvailable?: boolean;
}
export declare const CubicleSchema: import("mongoose").Schema<Cubicle, import("mongoose").Model<Cubicle, any, any, any, Document<unknown, any, Cubicle, any> & Cubicle & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Cubicle, Document<unknown, {}, import("mongoose").FlatRecord<Cubicle>, {}> & import("mongoose").FlatRecord<Cubicle> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
