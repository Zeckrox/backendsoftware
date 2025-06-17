import { Document } from 'mongoose';
export declare class Table extends Document {
    number: number;
    floorNumber: string;
    room?: string;
    isAvailable?: boolean;
}
export declare const TableSchema: import("mongoose").Schema<Table, import("mongoose").Model<Table, any, any, any, Document<unknown, any, Table, any> & Table & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Table, Document<unknown, {}, import("mongoose").FlatRecord<Table>, {}> & import("mongoose").FlatRecord<Table> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
