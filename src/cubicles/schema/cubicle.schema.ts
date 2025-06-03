import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) // crea createdAt y updatedAt
export class Cubicle {
  @Prop({ required: true }) // debe ser unique tambien?
  number: number;

  @Prop({ required: true })
  floorNumber: number;

  @Prop()
  room?: string;

  @Prop({ default: true }) // si no se indica, por default se asume que si esta disponible el cubiculo
  isAvailable?: boolean;
}
export const CubicleSchema = SchemaFactory.createForClass(Cubicle);
