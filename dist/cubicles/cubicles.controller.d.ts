import { CubiclesService } from './cubicles.service';
import { CreateCubicleDto } from './dto/create-cubicle.dto';
import { UpdateCubicleDto } from './dto/update-cubicle.dto';
export declare class CubiclesController {
    private readonly cubiclesService;
    constructor(cubiclesService: CubiclesService);
    create(createCubicleDto: CreateCubicleDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/cubicle.schema").Cubicle, {}> & import("./schema/cubicle.schema").Cubicle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCubicleDto: UpdateCubicleDto): string;
    remove(id: string): string;
}
