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
exports.DisabledDurationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const disabledDurations_schema_1 = require("./schema/disabledDurations.schema");
const mongoose_2 = require("mongoose");
let DisabledDurationService = class DisabledDurationService {
    disabledDurationModel;
    constructor(disabledDurationModel) {
        this.disabledDurationModel = disabledDurationModel;
    }
    async create(createDisabledDurationDto) {
        try {
            const createdDisabledDuration = new this.disabledDurationModel(createDisabledDurationDto);
            return await createdDisabledDuration.save();
        }
        catch (error) {
            throw new Error(`Error disabling duration: ${error.message}`);
        }
    }
    async findAll() {
        try {
            return await this.disabledDurationModel.find().exec();
        }
        catch (error) {
            throw new Error(`Error fetching disableDays: ${error.message}`);
        }
    }
    remove(date, duration) {
        try {
            return this.disabledDurationModel.findOneAndDelete({ date, duration }).exec();
        }
        catch (error) {
            throw new Error(`Error removing disabled duration ${date}: ${error.message}`);
        }
    }
};
exports.DisabledDurationService = DisabledDurationService;
exports.DisabledDurationService = DisabledDurationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(disabledDurations_schema_1.DisabledDuration.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DisabledDurationService);
//# sourceMappingURL=disabledDurations.service.js.map