import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {

    @Prop()
    nome: string;
  
    @Prop()
    ra: number;
  
    @Prop()
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
