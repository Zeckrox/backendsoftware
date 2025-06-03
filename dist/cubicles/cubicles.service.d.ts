import { CreateCubicleDto } from './dto/create-cubicle.dto';
import { UpdateCubicleDto } from './dto/update-cubicle.dto';
import { Cubicle } from './schema/cubicle.schema';
import { Model } from 'mongoose';
export declare class CubiclesService {
    private cubicleModel;
    constructor(cubicleModel: Model<Cubicle>);
    create(createCubicleDto: CreateCubicleDto): Promise<import("mongoose").Document<unknown, {}, Cubicle, {}> & Cubicle & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCubicleDto: UpdateCubicleDto): string;
    remove(id: number): string;
}
