
export interface UserPayLoad  {
    sub: number | string;
    email: string;
    name: string;
    iat?: number;
    exp?: number;
} 