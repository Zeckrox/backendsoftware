"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisabledDayModule = void 0;
const common_1 = require("@nestjs/common");
const disabledDays_service_1 = require("./disabledDays.service");
const disabledDays_controller_1 = require("./disabledDays.controller");
const mongoose_1 = require("@nestjs/mongoose");
const disabledDay_schema_1 = require("./schema/disabledDay.schema");
let DisabledDayModule = class DisabledDayModule {
};
exports.DisabledDayModule = DisabledDayModule;
exports.DisabledDayModule = DisabledDayModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: disabledDay_schema_1.DisabledDay.name,
                    schema: disabledDay_schema_1.DisabledDaySchema,
                },
            ]),
        ],
        controllers: [disabledDays_controller_1.DisabledDayController],
        providers: [disabledDays_service_1.DisabledDayService],
    })
], DisabledDayModule);
//# sourceMappingURL=disabledDays.module.js.map