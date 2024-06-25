import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Db } from 'mongodb';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Itinerario } from './itinerario.entity';

@Injectable()
export class ItinerarioService {
  constructor(
    @Inject('MONGO') private databaseMongo: Db,
    @InjectModel(Itinerario.name) private itinerarioModel: Model<Itinerario>,
  ) {}

  findOne(id: string) {
    return this.itinerarioModel.findById(id);
  }

  findAll() {
    return this.itinerarioModel.find().exec();
  }

  getItinerarios(userId: string) {
    const collection = this.databaseMongo.collection('itinerario');
    return collection.find({ user: userId }).toArray();
  }

  async create(data: any) {
    const newModel = new this.itinerarioModel(data);
    const model = await newModel.save();
    return model.toJSON();
  }

  async delete(id: string) {
    const result = await this.itinerarioModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`Itinerario with id ${id} not found`);
    }
    return { message: 'Itinerario deleted successfully' };
  }

  async update(id: string, changes: any) {
    const itinerario = await this.itinerarioModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!itinerario) {
      throw new NotFoundException(`Itinerario #${id} not found`);
    }
    return itinerario;
  }

  async remove(id: string) {
    const itinerario = await this.itinerarioModel
      .findByIdAndUpdate(id, { $set: { estado: 1 } }, { new: true })
      .exec();
    if (!itinerario) {
      throw new NotFoundException(`Itinerario #${id} not found`);
    }
    return itinerario;
  }
}
