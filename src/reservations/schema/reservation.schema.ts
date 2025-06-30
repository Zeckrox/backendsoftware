// src/reservations/schemas/reservation.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Reservation extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Table', required: false })
  tableId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Cubicle', required: false })
  cubicleId?: Types.ObjectId;

  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ type: Array, required: false })
  timeblocks: number[];

  @Prop({ type: Number })
  number: number;

  @Prop({ type: String })
  floorNumber: string;

  @Prop({ type: String })
  room: string;

  @Prop({ type: Number })
  people: number;

  @Prop({ type: String })
  weekday?: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);

ReservationSchema.pre('save', function (next) {
  if (this.date) {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    this.weekday = this.date.toLocaleDateString('en-US', options);
  }
  next();
});
