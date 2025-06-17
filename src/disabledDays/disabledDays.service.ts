import { Injectable } from '@nestjs/common';
import { CreateDisabledDayDto } from './dto/create-disabledDay.dto';
import { InjectModel } from '@nestjs/mongoose';
import { DisabledDay } from './schema/disabledDay.schema';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class DisabledDayService {
  constructor(@InjectModel(DisabledDay.name) private disabledDayModel: Model<DisabledDay>) {}

  async create(createDisabledDayDto: CreateDisabledDayDto) {
    try {
      const createdDisabledDay = new this.disabledDayModel(createDisabledDayDto);
      return await createdDisabledDay.save();
    } catch (error) {
      throw new Error(`Error disabling day: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.disabledDayModel.find().exec();
    } catch (error) {
      throw new Error(`Error fetching disableDays: ${error.message}`);
    }
  }

  remove(date: string) {
    try {
      return this.disabledDayModel.findOneAndDelete({date}).exec();
    } catch (error) {
      throw new Error(`Error removing disabled day ${date}: ${error.message}`);
    }
  }
}
