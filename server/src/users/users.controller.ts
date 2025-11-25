import { Controller, Get, Post, Put, Delete } from "@nestjs/common";

//localhost:3300/Users
@Controller("Users")
export class UsersController{
 @Get()
 getUsers(): string{
    return "You have fetched all Users";
 }

  @Post()
 createUser(): string{
    return " Users Created Successfully"
 } 

  @Put()
 PutUser(): string{
    return " Users Updated Successfully"
 }
  @Delete()
 DeleteUser(): string{
    return " Users Deleted Successfully"
 }
}