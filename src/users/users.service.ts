import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}


  async create(createUserDto: CreateUserDto) {
  new this.userModel({
  ...createUserDto,
  password: await bcrypt.hash(createUserDto.password, 10)
 }).save()

 return {
  ...createUserDto,
  password: undefined
 }

  }

  findAll() {
    return this.userModel.find()
  }

  findOne(id: string) {
    return this.userModel.findById(id)
  }

  async getByEmail(email: string){
    return await this.userModel.findOne({email}).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate({
      _id: id
    },
    {
      $set: updateUserDto,
    },
    {
      new: true
    })
  }

  remove(id: string) {
    return this.userModel.deleteOne({_id: id}).exec();
  }
}


// new this.userModel(createUserDto)
// return user.save();