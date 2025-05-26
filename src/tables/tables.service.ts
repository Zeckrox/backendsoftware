import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Table } from './schema/table.schema';
import { Model } from 'mongoose';

@Injectable()
export class TablesService {
  constructor(@InjectModel(Table.name) private tableModel: Model<Table>) {}

  async create(createTableDto: CreateTableDto) {
    try {
      const createdTable = new this.tableModel(createTableDto);
      return await createdTable.save();
    } catch (error) {
      throw new Error(`Error creating table: ${error.message}`);
    }
  }

  // create(createTableDto: CreateTableDto) {
  //   return 'This action adds a new table';
  // }

  findAll() {
    return `This action returns all tables`;
  }

  findOne(id: number) {
    return `This action returns a #${id} table`;
  }

  update(id: number, updateTableDto: UpdateTableDto) {
    return `This action updates a #${id} table`;
  }

  remove(id: number) {
    return `This action removes a #${id} table`;
  }
}
