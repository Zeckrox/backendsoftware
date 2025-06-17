import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './schema/table.schema';
import { Model } from 'mongoose';
export declare class TablesService {
    private tableModel;
    constructor(tableModel: Model<Table>);
    create(createTableDto: CreateTableDto): Promise<import("mongoose").Document<unknown, {}, Table, {}> & Table & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Table, {}> & Table & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Table, {}> & Table & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, updateTableDto: UpdateTableDto): Promise<(import("mongoose").Document<unknown, {}, Table, {}> & Table & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<void>;
    getTableByNumber(num: number): Promise<(import("mongoose").Document<unknown, {}, Table, {}> & Table & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
