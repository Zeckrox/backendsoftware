import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import { User } from './schema/users.schema';
import { Model, ObjectId } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private userModel;
    private readonly jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, User, {}> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: ObjectId): Promise<(import("mongoose").Document<unknown, {}, User, {}> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    decodeToken(token: string): Promise<any>;
    findOneByEmail(email: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, User, {}> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, User, {}> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, User, "findOne", {}>;
    update(id: ObjectId, updateUserDto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, User, {}> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: ObjectId): Promise<(import("mongoose").Document<unknown, {}, User, {}> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
