import { Controller, Get, Post, Put, Delete } from "@nestjs/common";

//localhost:3300/Users
@Controller("Users")
export class UsersController{
 @Get()
 getUsers(): string{
    return "You have fetched all Users";
 }
 creareUser(): string{
    return " Users Created Successfully"
 }
}