import { DisabledDayService } from './disabledDays.service';
import { CreateDisabledDayDto } from './dto/create-disabledDay.dto';
export declare class DisabledDayController {
    private readonly disabledDayService;
    constructor(disabledDayService: DisabledDayService);
    create(createDisabledDayDto: CreateDisabledDayDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/disabledDay.schema").DisabledDay, {}> & import("./schema/disabledDay.schema").DisabledDay & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/disabledDay.schema").DisabledDay, {}> & import("./schema/disabledDay.schema").DisabledDay & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    remove(date: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/disabledDay.schema").DisabledDay, {}> & import("./schema/disabledDay.schema").DisabledDay & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
