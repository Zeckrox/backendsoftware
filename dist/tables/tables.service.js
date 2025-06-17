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
exports.TablesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const table_schema_1 = require("./schema/table.schema");
const mongoose_2 = require("mongoose");
let TablesService = class TablesService {
    tableModel;
    constructor(tableModel) {
        this.tableModel = tableModel;
    }
    async create(createTableDto) {
        try {
            const createdTable = new this.tableModel(createTableDto);
            return await createdTable.save();
        }
        catch (error) {
            throw new Error(`Error creating table: ${error.message}`);
        }
    }
    async findAll() {
        try {
            return await this.tableModel.find().exec();
        }
        catch (error) {
            throw new Error(`Error fetching tables: ${error.message}`);
        }
    }
    findOne(id) {
        try {
            return this.tableModel.findById(id).exec();
        }
        catch (error) {
            throw new Error(`Error fetching table with id ${id}: ${error.message}`);
        }
    }
    async update(id, updateTableDto) {
        return this.tableModel.findByIdAndUpdate(id, updateTableDto, { new: true }).exec();
    }
    async remove(id) {
        try {
            await this.tableModel.findByIdAndDelete(id).exec();
        }
        catch (error) {
            throw new Error(`Error removing table with id ${id}: ${error.message}`);
        }
    }
    async getTableByNumber(num) {
        try {
            return await this.tableModel.findOne({ number: num });
        }
        catch (error) {
            throw new Error(`Error fetching table with number ${num}: ${error.message}`);
        }
    }
};
exports.TablesService = TablesService;
exports.TablesService = TablesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(table_schema_1.Table.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TablesService);
//# sourceMappingURL=tables.service.js.map