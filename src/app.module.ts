import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://marceloo:v3XTp2qeEKtX1Ade@cluster0.pxsjozu.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
    PostsModule
  ],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
