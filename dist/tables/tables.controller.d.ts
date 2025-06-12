import { TablesService } from './tables.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
export declare class TablesController {
    private readonly tablesService;
    constructor(tablesService: TablesService);
    create(createTableDto: CreateTableDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/table.schema").Table, {}> & import("./schema/table.schema").Table & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/table.schema").Table, {}> & import("./schema/table.schema").Table & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/table.schema").Table, {}> & import("./schema/table.schema").Table & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, updateTableDto: UpdateTableDto): Promise<(import("mongoose").Document<unknown, {}, import("./schema/table.schema").Table, {}> & import("./schema/table.schema").Table & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<void>;
}
