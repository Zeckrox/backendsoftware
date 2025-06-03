import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import { ObjectId } from 'mongoose';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/users.schema").User, {}> & import("./schema/users.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: ObjectId): Promise<(import("mongoose").Document<unknown, {}, import("./schema/users.schema").User, {}> & import("./schema/users.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: ObjectId, updateUserDto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/users.schema").User, {}> & import("./schema/users.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: ObjectId): Promise<(import("mongoose").Document<unknown, {}, import("./schema/users.schema").User, {}> & import("./schema/users.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
