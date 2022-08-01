import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import { User } from 'src/users/entities/user.entity';
import { UserPayLoad } from './models/UserPayLoad';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService){}
    login(user: User): UserToken {
       const payload: UserPayLoad = {
            sub: user.email,
            email: user.email,
            name: user.name,
       };

       const jwtToken = this.jwtService.sign(payload);

       return {
        access_token: jwtToken
       }
    }

   async validateUser(email: string, password: string) {
        const User = await this.usersService.findByEmail(email);
        console.log(User[0].password)

        if(User){
            const isPasswordValid = await  bcrypt.compare(password, User[0].password)

            if(isPasswordValid){
                return {
                    ...User,
                    password: undefined
                }
            }
        }

        throw new Error('Email address or passowrd provided is incorrect.')
    }
}
