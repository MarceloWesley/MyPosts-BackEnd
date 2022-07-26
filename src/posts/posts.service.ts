import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './entities/post.entity';

@Injectable()
export class PostsService {

  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  create(createPostDto: CreatePostDto) {
    const post = new this.postModel(createPostDto);
    return post.save();
  }

  findAll() {
    return this.postModel.find().populate('author')
  }

  findOne(id: string) {
    return this.postModel.findById(id)
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.postModel.findByIdAndUpdate({
      _id: id
    },
    {
      $set: updatePostDto,
    },
    {
      new: true
    })
  }
  
  remove(id: string) {
    return this.postModel.deleteOne({_id: id}).exec();
  }
}
