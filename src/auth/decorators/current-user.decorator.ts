import {createParamDecorator, ExecutionContext} from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { AuthRequest } from '../models/AuthRequest';

export const CurrentUser = createParamDecorator(
    (data: unknown, context: ExecutionContext): User => {
        const request = context.switchToHttp().getRequest<AuthRequest>();

        console.log(request.user)
        return request.user;
    }
)