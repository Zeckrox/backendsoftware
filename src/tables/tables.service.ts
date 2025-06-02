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

  async findAll() {
    try {
      return await this.tableModel.find().exec();
    } catch (error) {
      throw new Error(`Error fetching tables: ${error.message}`);
    }
  }

  findOne(id: string) {
    try {
      return this.tableModel.findById(id).exec();
    } catch (error) {
      throw new Error(`Error fetching table with id ${id}: ${error.message}`);
    }
  }

  async update(id: string, updateTableDto: UpdateTableDto) {
    return this.tableModel.findByIdAndUpdate(id, updateTableDto, { new: true }).exec();
  }

  async remove(id: string) {
    try {
      await this.tableModel.findByIdAndDelete(id).exec();
    } catch (error) {
      throw new Error(`Error removing table with id ${id}: ${error.message}`);
    }
  }
}
