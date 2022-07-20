import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import {User} from '../../users/entities/user.entity'




export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  content: string;

  @Prop()
  private?: boolean;
  
  @Prop()
  createdAt?: Date;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name})
  author: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);