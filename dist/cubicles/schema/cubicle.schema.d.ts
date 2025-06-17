import { Document } from 'mongoose';
export declare class Cubicle extends Document {
    number: number;
    floorNumber: number;
    room?: string;
    isAvailable?: boolean;
}
export declare const CubicleSchema: import("mongoose").Schema<Cubicle, import("mongoose").Model<Cubicle, any, any, any, Document<unknown, any, Cubicle, any> & Cubicle & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Cubicle, Document<unknown, {}, import("mongoose").FlatRecord<Cubicle>, {}> & import("mongoose").FlatRecord<Cubicle> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
