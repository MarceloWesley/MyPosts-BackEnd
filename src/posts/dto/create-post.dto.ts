export class CreatePostDto {
   title: string
   description: string
   content: string
   private?: boolean
   author: string
   createdAt?: Date
}
