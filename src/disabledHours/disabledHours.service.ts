import { Injectable } from '@nestjs/common';
import { CreateDisabledHoursDto } from './dto/create-disabledHours.dto';
import { InjectModel } from '@nestjs/mongoose';
import { DisabledHours } from './schema/disabledHours.schema';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class DisabledHoursService {
  constructor(@InjectModel(DisabledHours.name) private disabledHoursModel: Model<DisabledHours>) {}

  async create(createDisabledHoursDto: CreateDisabledHoursDto) {
    try {
      const createdDisabledHours = new this.disabledHoursModel(createDisabledHoursDto);
      return await createdDisabledHours.save();
    } catch (error) {
      throw new Error(`Error disabling hours: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.disabledHoursModel.find().exec();
    } catch (error) {
      throw new Error(`Error fetching disabled hours: ${error.message}`);
    }
  }

  remove(date: string, hour:string) {
    try {
      return this.disabledHoursModel.findOneAndDelete({date, hour}).exec();
    } catch (error) {
      throw new Error(`Error removing disabled hours ${date}: ${error.message}`);
    }
  }
}
