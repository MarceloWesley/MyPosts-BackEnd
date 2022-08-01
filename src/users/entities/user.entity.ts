import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsBoolean, IsDate, IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { Document } from 'mongoose';
import { RegexHelper } from 'src/helpers/regex.helper';


export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  @IsNotEmpty()
  name: string;

  @Prop({unique: true})
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Prop({unique: true})
  @IsNotEmpty()
  nickname: string;

  @Prop()
  @IsNotEmpty()
  @Matches(RegexHelper.password)
  password: string;
  
  @Prop()
  @IsBoolean()
  active: boolean;

  @Prop()
  @IsNotEmpty()
  @IsDate()
  createdAt: Date;
  


}

export const UserSchema = SchemaFactory.createForClass(User);