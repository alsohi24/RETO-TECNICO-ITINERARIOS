import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: string;

  @Prop()
  status?: string;

  @Prop({ required: true })
  nombre: string;

  @Prop({
    type: String,
    enum: ['Administrador', 'Pasajero'],
    required: true,
  })
  tipo_usuario: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
