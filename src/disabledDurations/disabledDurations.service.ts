import { Injectable } from '@nestjs/common';
import { CreateDisabledDurationDto } from './dto/create-disabledDuration.dto';
import { InjectModel } from '@nestjs/mongoose';
import { DisabledDuration } from './schema/disabledDurations.schema';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class DisabledDurationService {
  constructor(@InjectModel(DisabledDuration.name) private disabledDurationModel: Model<DisabledDuration>) {}

  async create(createDisabledDurationDto: CreateDisabledDurationDto) {
    try {
      const createdDisabledDuration = new this.disabledDurationModel(createDisabledDurationDto);
      return await createdDisabledDuration.save();
    } catch (error) {
      throw new Error(`Error disabling duration: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.disabledDurationModel.find().exec();
    } catch (error) {
      throw new Error(`Error fetching disableDays: ${error.message}`);
    }
  }

  remove(date: string, duration: number) {
    try {
      return this.disabledDurationModel.findOneAndDelete({date, duration}).exec();
    } catch (error) {
      throw new Error(`Error removing disabled duration ${date}: ${error.message}`);
    }
  }
}
