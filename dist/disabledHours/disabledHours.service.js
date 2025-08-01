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
exports.DisabledHoursService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const disabledHours_schema_1 = require("./schema/disabledHours.schema");
const mongoose_2 = require("mongoose");
let DisabledHoursService = class DisabledHoursService {
    disabledHoursModel;
    constructor(disabledHoursModel) {
        this.disabledHoursModel = disabledHoursModel;
    }
    async create(createDisabledHoursDto) {
        try {
            const createdDisabledHours = new this.disabledHoursModel(createDisabledHoursDto);
            return await createdDisabledHours.save();
        }
        catch (error) {
            throw new Error(`Error disabling hours: ${error.message}`);
        }
    }
    async findAll() {
        try {
            return await this.disabledHoursModel.find().exec();
        }
        catch (error) {
            throw new Error(`Error fetching disabled hours: ${error.message}`);
        }
    }
    remove(date, hour) {
        try {
            return this.disabledHoursModel.findOneAndDelete({ date, hour }).exec();
        }
        catch (error) {
            throw new Error(`Error removing disabled hours ${date}: ${error.message}`);
        }
    }
};
exports.DisabledHoursService = DisabledHoursService;
exports.DisabledHoursService = DisabledHoursService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(disabledHours_schema_1.DisabledHours.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DisabledHoursService);
//# sourceMappingURL=disabledHours.service.js.map