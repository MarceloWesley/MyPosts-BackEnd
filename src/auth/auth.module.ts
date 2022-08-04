import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/Jwt.strategy';
import { LocalStrategy } from './strategies/Local.strategy';

@Module({
  imports: [UsersModule, JwtModule.register({
    secret: "celo",
    signOptions: {expiresIn: '30d'},
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
