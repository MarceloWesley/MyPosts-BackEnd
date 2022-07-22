import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
// import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://marceloo:f8r4yj170V2auJd0@cluster0.pxsjozu.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
    PostsModule,
    // AuthModule
  ],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
