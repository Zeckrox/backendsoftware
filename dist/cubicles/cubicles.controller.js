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
exports.CubiclesController = void 0;
const common_1 = require("@nestjs/common");
const cubicles_service_1 = require("./cubicles.service");
const create_cubicle_dto_1 = require("./dto/create-cubicle.dto");
const update_cubicle_dto_1 = require("./dto/update-cubicle.dto");
let CubiclesController = class CubiclesController {
    cubiclesService;
    constructor(cubiclesService) {
        this.cubiclesService = cubiclesService;
    }
    create(createCubicleDto) {
        return this.cubiclesService.create(createCubicleDto);
    }
    findAll() {
        return this.cubiclesService.findAll();
    }
    findOne(id) {
        return this.cubiclesService.findOne(id);
    }
    update(id, updateCubicleDto) {
        return this.cubiclesService.update(id, updateCubicleDto);
    }
    remove(id) {
        return this.cubiclesService.remove(id);
    }
};
exports.CubiclesController = CubiclesController;
__decorate([
    (0, common_1.Post)('/create-cubicle'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cubicle_dto_1.CreateCubicleDto]),
    __metadata("design:returntype", void 0)
], CubiclesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CubiclesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CubiclesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cubicle_dto_1.UpdateCubicleDto]),
    __metadata("design:returntype", void 0)
], CubiclesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CubiclesController.prototype, "remove", null);
exports.CubiclesController = CubiclesController = __decorate([
    (0, common_1.Controller)('cubicles'),
    __metadata("design:paramtypes", [cubicles_service_1.CubiclesService])
], CubiclesController);
//# sourceMappingURL=cubicles.controller.js.map