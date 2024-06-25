import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Bus } from '../bus/bus.entity';

@Schema()
export class Itinerario extends Document {
  @Prop({ required: true })
  ciudad_origen: string;

  @Prop({ required: true })
  ciudad_destino: string;

  @Prop({ required: true })
  horario_salida: Date;

  @Prop({ required: true })
  horario_llegada: Date;

  @Prop({ required: true })
  estado: number;

  @Prop({ required: true })
  precio: number;

  @Prop({ type: Types.ObjectId, ref: Bus.name })
  bus: Bus | Types.ObjectId;
}

export const ItinerarioSchema = SchemaFactory.createForClass(Itinerario);
