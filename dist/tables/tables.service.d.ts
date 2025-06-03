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
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTableDto: UpdateTableDto): string;
    remove(id: number): string;
}
