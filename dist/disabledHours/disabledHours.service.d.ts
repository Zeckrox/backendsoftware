import { CreateDisabledHoursDto } from './dto/create-disabledHours.dto';
import { DisabledHours } from './schema/disabledHours.schema';
import { Model } from 'mongoose';
export declare class DisabledHoursService {
    private disabledHoursModel;
    constructor(disabledHoursModel: Model<DisabledHours>);
    create(createDisabledHoursDto: CreateDisabledHoursDto): Promise<import("mongoose").Document<unknown, {}, DisabledHours, {}> & DisabledHours & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, DisabledHours, {}> & DisabledHours & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    remove(date: string, hour: string): Promise<(import("mongoose").Document<unknown, {}, DisabledHours, {}> & DisabledHours & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
