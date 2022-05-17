import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IConector } from './conectors.interface';
import { CreateConectorDto } from './dto/create-conector.dto';
import { UpdateConectorDto } from './dto/update-conector.dto';
import { Conector, ConectorDocument } from './entities/conector.entity';

@Injectable()
export class ConectorsService {
  constructor(
    @InjectModel(Conector.name) private conectorSchema: Model<ConectorDocument>,
  ) {}
  create(createConectorDto: CreateConectorDto) {
    const conector = new this.conectorSchema(createConectorDto);
    return conector.save();
  }

  findAll(conector: IConector) {
    const { name, type, privacity, category } = conector;
    try {
      const conectors = this.conectorSchema.find().where('deleted_at', null);
      if (name) conectors.where('name', name);
      if (type) conectors.where('type', type);
      if (privacity) conectors.where('privacity', privacity);
      if (category) conectors.where('category', category);
      return conectors;
    } catch (error) {
      throw new Error('Não foi possível listar os conectors!');
    }
  }

  findOne(id: string) {
    return this.conectorSchema.findOne({
      _id: id,
    });
  }

  update(id: string, updateConectorDto: UpdateConectorDto) {
    return this.conectorSchema.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateConectorDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.conectorSchema.findByIdAndUpdate(
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

  async addSeed(data: IConector) {
    try {
      const connector = await this.conectorSchema.create(data);
      await connector.save();
    } catch (error) {
      throw new Error('Não foi possível criar os conectors!');
    }
  }
}
