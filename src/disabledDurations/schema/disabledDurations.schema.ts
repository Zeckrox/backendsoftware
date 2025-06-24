import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true }) 
export class DisabledDuration {

  @Prop({ required: true, unique: true }) 
  date: string;

  @Prop({ required: true }) 
  duration: number;
}
export const DisabledDurationSchema = SchemaFactory.createForClass(DisabledDuration);
