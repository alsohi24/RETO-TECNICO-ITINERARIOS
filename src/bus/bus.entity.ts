import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BusDocument = Bus & Document;

@Schema()
export class Bus {
  @Prop({ required: true })
  placa: string;

  @Prop({ required: true })
  operador: string;

  @Prop({
    type: String,
    enum: ['Turista', 'Ejecutivo', 'Premium'],
    required: true,
  })
  tipo_bus: string;

  asientos: number;
}

export const BusSchema = SchemaFactory.createForClass(Bus);
