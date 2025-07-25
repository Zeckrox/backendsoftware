"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const tables_module_1 = require("./tables/tables.module");
const cubicles_module_1 = require("./cubicles/cubicles.module");
const reservations_module_1 = require("./reservations/reservations.module");
const auth_module_1 = require("./auth/auth.module");
const disabledDays_module_1 = require("./disabledDays/disabledDays.module");
const disabledHours_module_1 = require("./disabledHours/disabledHours.module");
const disabledDurations_module_1 = require("./disabledDurations/disabledDurations.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: () => ({
                    uri: process.env.MONGODB_URI,
                    dbName: process.env.MONGODB_DB,
                }),
            }),
            users_module_1.UsersModule,
            tables_module_1.TablesModule,
            cubicles_module_1.CubiclesModule,
            reservations_module_1.ReservationsModule,
            auth_module_1.AuthModule,
            disabledDays_module_1.DisabledDayModule,
            disabledHours_module_1.DisabledHoursModule,
            disabledDurations_module_1.DisabledDurationModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map