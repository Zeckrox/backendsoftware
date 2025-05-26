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

  // create(createCubicleDto: CreateCubicleDto) {
  //   return 'This action adds a new cubicle';
  // }

  findAll() {
    return `This action returns all cubicles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cubicle`;
  }

  update(id: number, updateCubicleDto: UpdateCubicleDto) {
    return `This action updates a #${id} cubicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} cubicle`;
  }
}
