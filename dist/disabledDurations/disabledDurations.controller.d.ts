import { DisabledDurationService } from './disabledDurations.service';
import { CreateDisabledDurationDto } from './dto/create-disabledDuration.dto';
export declare class DisabledDurationController {
    private readonly disabledDurationService;
    constructor(disabledDurationService: DisabledDurationService);
    create(createDisabledDurationDto: CreateDisabledDurationDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/disabledDurations.schema").DisabledDuration, {}> & import("./schema/disabledDurations.schema").DisabledDuration & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/disabledDurations.schema").DisabledDuration, {}> & import("./schema/disabledDurations.schema").DisabledDuration & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    remove(date: string, duration: number): Promise<(import("mongoose").Document<unknown, {}, import("./schema/disabledDurations.schema").DisabledDuration, {}> & import("./schema/disabledDurations.schema").DisabledDuration & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
