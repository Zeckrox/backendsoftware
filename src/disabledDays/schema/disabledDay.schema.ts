import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true }) 
export class DisabledDay {

  @Prop({ required: true, unique: true }) 
  date: string;
}
export const DisabledDaySchema = SchemaFactory.createForClass(DisabledDay);
