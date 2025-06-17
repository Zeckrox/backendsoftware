"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubiclesModule = void 0;
const common_1 = require("@nestjs/common");
const cubicles_service_1 = require("./cubicles.service");
const cubicles_controller_1 = require("./cubicles.controller");
const mongoose_1 = require("@nestjs/mongoose");
const cubicle_schema_1 = require("./schema/cubicle.schema");
let CubiclesModule = class CubiclesModule {
};
exports.CubiclesModule = CubiclesModule;
exports.CubiclesModule = CubiclesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: cubicle_schema_1.Cubicle.name,
                    schema: cubicle_schema_1.CubicleSchema,
                },
            ]),
        ],
        exports: [cubicles_service_1.CubiclesService],
        controllers: [cubicles_controller_1.CubiclesController],
        providers: [cubicles_service_1.CubiclesService],
    })
], CubiclesModule);
//# sourceMappingURL=cubicles.module.js.map