import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) // crea createdAt y updatedAt
export class Table extends Document {
  @Prop({ required: true }) //debe ser unique tambien?
  number: number;

  @Prop({ required: true })
  floorNumber: string;

  @Prop()
  room?: string;

  @Prop({ default: true }) //si no se indica, por default se asume que si esta disponible la mesa
  isAvailable?: boolean;
}
export const TableSchema = SchemaFactory.createForClass(Table);
