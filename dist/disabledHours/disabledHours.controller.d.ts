import { DisabledHoursService } from './disabledHours.service';
import { CreateDisabledHoursDto } from './dto/create-disabledHours.dto';
export declare class DisabledHoursController {
    private readonly disabledHoursService;
    constructor(disabledHoursService: DisabledHoursService);
    create(createDisabledHoursDto: CreateDisabledHoursDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/disabledHours.schema").DisabledHours, {}> & import("./schema/disabledHours.schema").DisabledHours & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/disabledHours.schema").DisabledHours, {}> & import("./schema/disabledHours.schema").DisabledHours & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    remove(date: string, hour: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/disabledHours.schema").DisabledHours, {}> & import("./schema/disabledHours.schema").DisabledHours & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
