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
exports.ReservationsController = void 0;
const common_1 = require("@nestjs/common");
const reservations_service_1 = require("./reservations.service");
const create_reservation_dto_1 = require("./dto/create-reservation.dto");
const update_reservation_dto_1 = require("./dto/update-reservation.dto");
const get_available_spots_dto_1 = require("./dto/get-available-spots.dto");
let ReservationsController = class ReservationsController {
    reservationsService;
    constructor(reservationsService) {
        this.reservationsService = reservationsService;
    }
    createReservation(createReservationDto) {
        return this.reservationsService.createReservation(createReservationDto);
    }
    findAll() {
        return this.reservationsService.findAll();
    }
    async getAvailableSpots(getAvailableSpotsDto) {
        return await this.reservationsService.getAvailableSpots(getAvailableSpotsDto);
    }
    async findByUser(userId) {
        return this.reservationsService.findByUserId(userId);
    }
    findOne(id) {
        return this.reservationsService.findOne(+id);
    }
    update(id, updateReservationDto) {
        return this.reservationsService.update(+id, updateReservationDto);
    }
    async updatePeople(id, people) {
        return this.reservationsService.updatePeople(id, people);
    }
    async eliminarReserva(id) {
        return this.reservationsService.eliminarReserva(id);
    }
};
exports.ReservationsController = ReservationsController;
__decorate([
    (0, common_1.Post)('/createReservation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reservation_dto_1.CreateReservationDto]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "createReservation", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/availableSpots'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_available_spots_dto_1.GetAvailableSpotsDto]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "getAvailableSpots", null);
__decorate([
    (0, common_1.Get)('/reservas-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_reservation_dto_1.UpdateReservationDto]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('update-people/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('people')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "updatePeople", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "eliminarReserva", null);
exports.ReservationsController = ReservationsController = __decorate([
    (0, common_1.Controller)('reservations'),
    __metadata("design:paramtypes", [reservations_service_1.ReservationsService])
], ReservationsController);
//# sourceMappingURL=reservations.controller.js.map