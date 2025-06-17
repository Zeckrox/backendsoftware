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
exports.DisabledDayController = void 0;
const common_1 = require("@nestjs/common");
const disabledDays_service_1 = require("./disabledDays.service");
const create_disabledDay_dto_1 = require("./dto/create-disabledDay.dto");
let DisabledDayController = class DisabledDayController {
    disabledDayService;
    constructor(disabledDayService) {
        this.disabledDayService = disabledDayService;
    }
    create(createDisabledDayDto) {
        return this.disabledDayService.create(createDisabledDayDto);
    }
    findAll() {
        return this.disabledDayService.findAll();
    }
    remove(date) {
        return this.disabledDayService.remove(date);
    }
};
exports.DisabledDayController = DisabledDayController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_disabledDay_dto_1.CreateDisabledDayDto]),
    __metadata("design:returntype", void 0)
], DisabledDayController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DisabledDayController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':date'),
    __param(0, (0, common_1.Param)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DisabledDayController.prototype, "remove", null);
exports.DisabledDayController = DisabledDayController = __decorate([
    (0, common_1.Controller)('disabled-days'),
    __metadata("design:paramtypes", [disabledDays_service_1.DisabledDayService])
], DisabledDayController);
//# sourceMappingURL=disabledDays.controller.js.map