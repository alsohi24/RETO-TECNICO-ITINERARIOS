import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../users/entities/user.entity';
import { Itinerario } from '../itinerarios/itinerario.entity';
import moment from 'moment';

export type ReservaDocument = Reserva & Document;

@Schema()
export class Reserva {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  usuario: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Itinerario.name, required: true })
  itinerario: Types.ObjectId;

  @Prop({ required: true })
  asiento_id: number;

  @Prop({ default: () => moment().tz('America/Lima').toDate() })
  fecha_reserva: Date;
}

export const ReservaSchema = SchemaFactory.createForClass(Reserva);
