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
exports.CubiclesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cubicle_schema_1 = require("./schema/cubicle.schema");
const mongoose_2 = require("mongoose");
let CubiclesService = class CubiclesService {
    cubicleModel;
    constructor(cubicleModel) {
        this.cubicleModel = cubicleModel;
    }
    async create(createCubicleDto) {
        try {
            const createdCubicle = new this.cubicleModel(createCubicleDto);
            return await createdCubicle.save();
        }
        catch (error) {
            throw new Error(`Error creating cubicle: ${error.message}`);
        }
    }
    async findAll() {
        try {
            return await this.cubicleModel.find().exec();
        }
        catch (error) {
            throw new Error(`Error fetching cubicles: ${error.message}`);
        }
    }
    findOne(id) {
        try {
            return this.cubicleModel.findById(id).exec();
        }
        catch (error) {
            throw new Error(`Error fetching cubicle with id ${id}: ${error.message}`);
        }
    }
    async update(id, updateCubicleDto) {
        return this.cubicleModel.findByIdAndUpdate(id, updateCubicleDto, { new: true }).exec();
    }
    remove(id) {
        try {
            return this.cubicleModel.findByIdAndDelete(id).exec();
        }
        catch (error) {
            throw new Error(`Error removing cubicle with id ${id}: ${error.message}`);
        }
    }
    async getCubicleByNumber(num) {
        try {
            return await this.cubicleModel.findOne({ number: num });
        }
        catch (error) {
            throw new Error(`Error fetching cubicle with number ${num}: ${error.message}`);
        }
    }
};
exports.CubiclesService = CubiclesService;
exports.CubiclesService = CubiclesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cubicle_schema_1.Cubicle.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CubiclesService);
//# sourceMappingURL=cubicles.service.js.map