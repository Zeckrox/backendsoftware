import { Injectable } from '@nestjs/common';
import { CreateCubicleDto } from './dto/create-cubicle.dto';
import { UpdateCubicleDto } from './dto/update-cubicle.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cubicle } from './schema/cubicle.schema';
import { Model } from 'mongoose';

@Injectable()
export class CubiclesService {
  constructor(@InjectModel(Cubicle.name) private cubicleModel: Model<Cubicle>) {}

  async create(createCubicleDto: CreateCubicleDto) {
    try {
      const createdCubicle = new this.cubicleModel(createCubicleDto);
      return await createdCubicle.save();
    } catch (error) {
      throw new Error(`Error creating cubicle: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.cubicleModel.find().exec();
    } catch (error) {
      throw new Error(`Error fetching cubicles: ${error.message}`);
    }
  }

  findOne(id: string) {
    try {
      return this.cubicleModel.findById(id).exec();
    } catch (error) {
      throw new Error(`Error fetching cubicle with id ${id}: ${error.message}`);
    }
  }

  async update(id: string, updateCubicleDto: UpdateCubicleDto) {
    return this.cubicleModel.findByIdAndUpdate(id, updateCubicleDto, { new: true }).exec();
  }

  remove(id: string) {
    try {
      return this.cubicleModel.findByIdAndDelete(id).exec();
    } catch (error) {
      throw new Error(`Error removing cubicle with id ${id}: ${error.message}`);
    }
  }
}
