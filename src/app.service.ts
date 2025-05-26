import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async create(newUser: CreateUserDto): Promise<User> {
    const createdUser = new this.UserModel(newUser);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

}
