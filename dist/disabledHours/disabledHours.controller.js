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
exports.DisabledHoursController = void 0;
const common_1 = require("@nestjs/common");
const disabledHours_service_1 = require("./disabledHours.service");
const create_disabledHours_dto_1 = require("./dto/create-disabledHours.dto");
let DisabledHoursController = class DisabledHoursController {
    disabledHoursService;
    constructor(disabledHoursService) {
        this.disabledHoursService = disabledHoursService;
    }
    create(createDisabledHoursDto) {
        return this.disabledHoursService.create(createDisabledHoursDto);
    }
    findAll() {
        return this.disabledHoursService.findAll();
    }
    remove(date, hour) {
        return this.disabledHoursService.remove(date, hour);
    }
};
exports.DisabledHoursController = DisabledHoursController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_disabledHours_dto_1.CreateDisabledHoursDto]),
    __metadata("design:returntype", void 0)
], DisabledHoursController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DisabledHoursController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':date/:hour'),
    __param(0, (0, common_1.Param)('date')),
    __param(1, (0, common_1.Param)('hour')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DisabledHoursController.prototype, "remove", null);
exports.DisabledHoursController = DisabledHoursController = __decorate([
    (0, common_1.Controller)('disabled-hours'),
    __metadata("design:paramtypes", [disabledHours_service_1.DisabledHoursService])
], DisabledHoursController);
//# sourceMappingURL=disabledHours.controller.js.map