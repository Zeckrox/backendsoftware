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
exports.ReservationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const reservation_schema_1 = require("./schema/reservation.schema");
const mongoose_2 = require("mongoose");
const timeOptions_1 = require("./utils/timeOptions");
const tables_service_1 = require("../tables/tables.service");
const cubicles_service_1 = require("../cubicles/cubicles.service");
let ReservationsService = class ReservationsService {
    reservationModel;
    tablesService;
    cubiclesService;
    constructor(reservationModel, tablesService, cubiclesService) {
        this.reservationModel = reservationModel;
        this.tablesService = tablesService;
        this.cubiclesService = cubiclesService;
    }
    async createReservation(createReservationDto) {
        if (createReservationDto.type === 'table') {
            return await this.createTableReservation(createReservationDto);
        }
        else if (createReservationDto.type === 'cubicle') {
            return await this.createCubicleReservation(createReservationDto);
        }
    }
    async findByUserId(userId) {
        try {
            const objectId = new mongoose_2.Types.ObjectId(userId);
            return await this.reservationModel
                .find({ userId: objectId })
                ?.populate('cubicleId', 'room')
                ?.populate('tableId', 'room')
                .exec();
        }
        catch (error) {
            throw new Error(`error en fetch de reservas de este user id: ${error.message}`);
        }
    }
    async updatePeople(id, people) {
        try {
            const objectId = new mongoose_2.Types.ObjectId(id);
            const updatedReservation = await this.reservationModel.findByIdAndUpdate(objectId, { people: people }, { new: true });
            if (!updatedReservation) {
                throw new common_1.BadRequestException('reserva not found');
            }
            return updatedReservation;
        }
        catch (error) {
            throw new Error(`error actualizando cant de personas: ${error.message}`);
        }
    }
    async createTableReservation(createReservationDto) {
        const idTable = await this.tablesService.getTableByNumber(createReservationDto.number);
        const startTimeOptionsIndex = timeOptions_1.startTimeOptions.findIndex((element) => element === createReservationDto.startTime);
        const timeblocks = [];
        if (startTimeOptionsIndex === -1) {
            throw new common_1.BadRequestException('hora de inicio invalida');
        }
        for (let i = 0; i < (createReservationDto.duration / 30) + 1; i++) {
            timeblocks.push(startTimeOptionsIndex + i);
        }
        try {
            const createdReservation = new this.reservationModel({
                ...createReservationDto,
                userId: new mongoose_2.Types.ObjectId(createReservationDto.userId),
                tableId: idTable,
                timeblocks: timeblocks,
            });
            return await createdReservation.save();
        }
        catch (error) {
            throw new Error(`error creando reserva: ${error.message}`);
        }
    }
    async createCubicleReservation(createReservationDto) {
        const idCubicle = await this.cubiclesService.getCubicleByNumber(createReservationDto.number);
        const startTimeOptionsIndex = timeOptions_1.startTimeOptions.findIndex((element) => element === createReservationDto.startTime);
        const timeblocks = [];
        if (startTimeOptionsIndex === -1) {
            throw new common_1.BadRequestException('hora de inicio invalida');
        }
        for (let i = 0; i < (createReservationDto.duration / 30) + 1; i++) {
            timeblocks.push(startTimeOptionsIndex + i);
        }
        try {
            const createdReservation = new this.reservationModel({
                ...createReservationDto,
                userId: new mongoose_2.Types.ObjectId(createReservationDto.userId),
                cubicleId: idCubicle,
                timeblocks: timeblocks,
            });
            return await createdReservation.save();
        }
        catch (error) {
            throw new Error(`error creando reserva: ${error.message}`);
        }
    }
    async findAll() {
        try {
            return await this.reservationModel.find().exec();
        }
        catch (error) {
            throw new Error(`error fetching reservations: ${error.message}`);
        }
    }
    findOne(id) {
        return `This action returns a #${id} reservation`;
    }
    update(id, updateReservationDto) {
        return `This action updates a #${id} reservation`;
    }
    async eliminarReserva(id) {
        const objectId = new mongoose_2.Types.ObjectId(id);
        return this.reservationModel.findByIdAndDelete(objectId);
    }
    async getAvailableSpots(getAvailableSpotsDto) {
        const startTimeOptionsIndex = timeOptions_1.startTimeOptions.findIndex((element) => element === getAvailableSpotsDto.startTime);
        const timeblocks = [];
        if (startTimeOptionsIndex < 0)
            return;
        for (let i = 0; i < getAvailableSpotsDto.duration / 30; i++) {
            timeblocks.push(startTimeOptionsIndex + 1 + i);
        }
        if (getAvailableSpotsDto.type === 'table') {
            return await this.getAvailableTables(getAvailableSpotsDto.date, timeblocks);
        }
        else if (getAvailableSpotsDto.type === 'cubicle') {
            return await this.getAvailableCubicles(getAvailableSpotsDto.date, timeblocks);
        }
    }
    async getAvailableCubicles(findDate, findTimeblocks) {
        const result = await this.reservationModel
            .find({
            tableId: { $exists: false },
            cubicleId: { $exists: true },
            date: findDate,
            timeblocks: { $in: findTimeblocks },
        })
            .populate('cubicleId', 'floorNumber room');
        return result;
    }
    async getAvailableTables(findDate, findTimeblocks) {
        const result = await this.reservationModel
            .find({
            tableId: { $exists: true },
            cubicleId: { $exists: false },
            date: findDate,
            timeblocks: { $in: findTimeblocks },
        })
            .populate('tableId', 'number floorNumber room');
        return result;
    }
};
exports.ReservationsService = ReservationsService;
exports.ReservationsService = ReservationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reservation_schema_1.Reservation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        tables_service_1.TablesService,
        cubicles_service_1.CubiclesService])
], ReservationsService);
//# sourceMappingURL=reservations.service.js.map