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
exports.DisabledDurationController = void 0;
const common_1 = require("@nestjs/common");
const disabledDurations_service_1 = require("./disabledDurations.service");
const create_disabledDuration_dto_1 = require("./dto/create-disabledDuration.dto");
let DisabledDurationController = class DisabledDurationController {
    disabledDurationService;
    constructor(disabledDurationService) {
        this.disabledDurationService = disabledDurationService;
    }
    create(createDisabledDurationDto) {
        return this.disabledDurationService.create(createDisabledDurationDto);
    }
    findAll() {
        return this.disabledDurationService.findAll();
    }
    remove(date, duration) {
        return this.disabledDurationService.remove(date, duration);
    }
};
exports.DisabledDurationController = DisabledDurationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_disabledDuration_dto_1.CreateDisabledDurationDto]),
    __metadata("design:returntype", void 0)
], DisabledDurationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DisabledDurationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':date/:duration'),
    __param(0, (0, common_1.Param)('date')),
    __param(1, (0, common_1.Param)('duration')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], DisabledDurationController.prototype, "remove", null);
exports.DisabledDurationController = DisabledDurationController = __decorate([
    (0, common_1.Controller)('disabled-durations'),
    __metadata("design:paramtypes", [disabledDurations_service_1.DisabledDurationService])
], DisabledDurationController);
//# sourceMappingURL=disabledDurations.controller.js.map