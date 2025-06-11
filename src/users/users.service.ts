import * as bcrypt from 'bcrypt';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/users.schema';
import { Model, ObjectId } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  //conexion con bd siempre debe ser asincrona
  async create(createUserDto: CreateUserDto) {
    try {
      const createdUser = new this.userModel(createUserDto);
      createdUser.password = await bcrypt.hash(createdUser.password, 10);
      let temp: any = await createdUser.save();
      temp.password = undefined;
      return temp;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: ObjectId) {
    return this.userModel.findById(id).exec();
  }

  async decodeToken(token: string): Promise<any> {
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: 'TEMPORARY SECRET CODE RECORDAR CAMBIAR',
      });
      return payload;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  findOneByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  async update(id: ObjectId, updateUserDto: UpdateUserDto) {
    await this.userModel.findByIdAndUpdate(id, updateUserDto);
    const user = await this.userModel.findById(id);
    if (!user) throw new NotFoundException('User not found');
    user.password = await bcrypt.hash(user.password, 10);
    return user.save();
  }

  async remove(id: ObjectId) {
    try {
      if (!(await this.userModel.findById(id))) throw new Error('Usuario no existe');
      return this.userModel.findByIdAndDelete(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
