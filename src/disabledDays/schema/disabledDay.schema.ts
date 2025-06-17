import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true }) 
export class DisabledDay {

  @Prop({ required: true, unique: true }) 
  date: string;

  @Prop({ required: true }) 
  type: string;
}
export const DisabledDaySchema = SchemaFactory.createForClass(DisabledDay);
