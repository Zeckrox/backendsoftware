import { CreateCubicleDto } from './dto/create-cubicle.dto';
import { UpdateCubicleDto } from './dto/update-cubicle.dto';
import { Cubicle } from './schema/cubicle.schema';
import { Model } from 'mongoose';
export declare class CubiclesService {
    private cubicleModel;
    constructor(cubicleModel: Model<Cubicle>);
    create(createCubicleDto: CreateCubicleDto): Promise<import("mongoose").Document<unknown, {}, Cubicle, {}> & Cubicle & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Cubicle, {}> & Cubicle & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Cubicle, {}> & Cubicle & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, updateCubicleDto: UpdateCubicleDto): Promise<(import("mongoose").Document<unknown, {}, Cubicle, {}> & Cubicle & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, Cubicle, {}> & Cubicle & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
