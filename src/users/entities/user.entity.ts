import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsBoolean, IsDate, IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';
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
  @MinLength(4)
  @MaxLength(20)
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