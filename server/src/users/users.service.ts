export class UsersService {
  Users: {id: number, name: string, age: number, gender: string, ismarried: boolean}[]=[ 
    {id: 1, name: 'John Doe', age: 30, gender: 'Male', ismarried: false},
     {id: 2, name: 'Mary clotte', age: 30, gender: 'Female', ismarried: true},
      {id: 1, name: 'Sam smith', age: 30, gender: 'Male', ismarried: true},
  ] 


    getAllUsers(){
        return this.Users
    }
    getUserById(id: number){
        return this.Users.find(user => user.id === id)
    }
    // Creating a user using this service funstions
    createUser (user: {id: number, name: string, age: number, gender: string, ismarried: boolean}){
        this.Users.push(user)
    }
}