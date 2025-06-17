import { CreateDisabledDayDto } from './dto/create-disabledDay.dto';
import { DisabledDay } from './schema/disabledDay.schema';
import { Model } from 'mongoose';
export declare class DisabledDayService {
    private disabledDayModel;
    constructor(disabledDayModel: Model<DisabledDay>);
    create(createDisabledDayDto: CreateDisabledDayDto): Promise<import("mongoose").Document<unknown, {}, DisabledDay, {}> & DisabledDay & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, DisabledDay, {}> & DisabledDay & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    remove(date: string): Promise<(import("mongoose").Document<unknown, {}, DisabledDay, {}> & DisabledDay & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
