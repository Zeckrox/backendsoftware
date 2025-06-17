"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const users_schema_1 = require("./schema/users.schema");
const mongoose_2 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    userModel;
    jwtService;
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async create(createUserDto) {
        try {
            const createdUser = new this.userModel(createUserDto);
            createdUser.password = await bcrypt.hash(createdUser.password, 10);
            let temp = await createdUser.save();
            temp.password = undefined;
            return temp;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    findOne(id) {
        return this.userModel.findById(id).exec();
    }
    async decodeToken(token) {
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: 'TEMPORARY SECRET CODE RECORDAR CAMBIAR',
            });
            return payload;
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error);
        }
    }
    findOneByEmail(email) {
        return this.userModel.findOne({ email });
    }
    async update(id, updateUserDto) {
        await this.userModel.findByIdAndUpdate(id, updateUserDto);
        const user = await this.userModel.findById(id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        if (updateUserDto.password) {
            user.password = await bcrypt.hash(updateUserDto.password, 10);
        }
        return user.save();
    }
    async remove(id) {
        try {
            if (!(await this.userModel.findById(id)))
                throw new Error('Usuario no existe');
            return this.userModel.findByIdAndDelete(id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map