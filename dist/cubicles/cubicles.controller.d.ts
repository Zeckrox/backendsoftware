import { CubiclesService } from './cubicles.service';
import { CreateCubicleDto } from './dto/create-cubicle.dto';
import { UpdateCubicleDto } from './dto/update-cubicle.dto';
export declare class CubiclesController {
    private readonly cubiclesService;
    constructor(cubiclesService: CubiclesService);
    create(createCubicleDto: CreateCubicleDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/cubicle.schema").Cubicle, {}> & import("./schema/cubicle.schema").Cubicle & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/cubicle.schema").Cubicle, {}> & import("./schema/cubicle.schema").Cubicle & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/cubicle.schema").Cubicle, {}> & import("./schema/cubicle.schema").Cubicle & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, updateCubicleDto: UpdateCubicleDto): Promise<(import("mongoose").Document<unknown, {}, import("./schema/cubicle.schema").Cubicle, {}> & import("./schema/cubicle.schema").Cubicle & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/cubicle.schema").Cubicle, {}> & import("./schema/cubicle.schema").Cubicle & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
