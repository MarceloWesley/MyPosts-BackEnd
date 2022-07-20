export class CreateUserDto {
    name: string
    email: string 
    nickname: string
    password: string 
    active: boolean
    createdAt?: Date
    
}
