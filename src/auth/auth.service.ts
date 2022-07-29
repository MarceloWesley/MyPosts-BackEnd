import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService){}

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
