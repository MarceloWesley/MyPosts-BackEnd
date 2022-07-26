import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt.auth.guard';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { LoginValidationMiddleware } from './auth/middlewares/login-validation.middleware';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://marceloo:f8r4yj170V2auJd0@cluster0.pxsjozu.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
    PostsModule,
    AuthModule,
    // AuthModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
configure(consumer: MiddlewareConsumer) {
  consumer.apply(LoginValidationMiddleware).forRoutes('login')
}
}
