import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) // crea createdAt y updatedAt
export class User extends Document {
  //mongoose trabaja con documentos y cada documento tiene propiedades. Al extiender Document, entonces la clase User hereda todo eso
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  photoUrl?: string;

  @Prop({ required: true, enum: ['student', 'admin'] })
  role: string;

  @Prop({ required: true })
  career: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true, enum: ['Mujer', 'Hombre', 'Otro'] })
  gender: string;

  //no user id, no necesitamos un campo llamado userId que referencia al mismo modelo User, es decir un usuario tiene un campo userId que apunta a otro usuario
}

export const UserSchema = SchemaFactory.createForClass(User);
