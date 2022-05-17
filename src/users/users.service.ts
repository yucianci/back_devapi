import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { IUser } from './users.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userSchema: Model<UserDocument>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = new this.userSchema(createUserDto);
    return user.save();
  }

  findAll() {
    return this.userSchema.find().where('deleted_at', null);
  }

  findOne(id: string) {
    return this.userSchema.findOne({
      _id: id,
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userSchema.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateUserDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.userSchema.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          deleted_at: new Date(),
        },
      },
      {
        new: true,
      },
    );
  }

  async addSeed(data: IUser) {
    try {
      const user = await this.userSchema.create(data);
      await user.save();
    } catch (error) {
      console.log(error);
    }
  }

  async getByEmail(email: string) {
    return await this.userSchema.findOne({ email }).exec();
  }
}
