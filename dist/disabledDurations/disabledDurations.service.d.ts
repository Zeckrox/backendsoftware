import { CreateDisabledDurationDto } from './dto/create-disabledDuration.dto';
import { DisabledDuration } from './schema/disabledDurations.schema';
import { Model } from 'mongoose';
export declare class DisabledDurationService {
    private disabledDurationModel;
    constructor(disabledDurationModel: Model<DisabledDuration>);
    create(createDisabledDurationDto: CreateDisabledDurationDto): Promise<import("mongoose").Document<unknown, {}, DisabledDuration, {}> & DisabledDuration & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, DisabledDuration, {}> & DisabledDuration & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    remove(date: string, duration: number): Promise<(import("mongoose").Document<unknown, {}, DisabledDuration, {}> & DisabledDuration & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
