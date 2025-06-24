import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true }) 
export class DisabledHours {

  @Prop({ required: true}) 
  date: string;

  @Prop({ required: true }) 
  hour: string;
}
export const DisabledHoursSchema = SchemaFactory.createForClass(DisabledHours);
