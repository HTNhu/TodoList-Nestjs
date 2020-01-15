import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'
export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'Nhu ne',
        password: 'nhune',
      },
      {
        userId: 2,
        username: 'Nhu day ne',
        password: 'nhudayne',
      }
    ];
  }

  async findOne(username: string): Promise<User> {
    return await this.users.find(user => user.username === username);
  }
  async login(username, password){
    const findUser = this.users.find(x => x.username === username && x.password === password)
    
    // for(let i = 0; i < this.users.length; i++){
    //     if (this.users[i].username === username && this.users[i].password === password){
    //         const currentUser = {
    //             id: this.users[i].id,
    //             username,
    //             password
    //         }
            // const token = jwt.sign(currentUser, currentUser.id)
            // return token
        // }
    // }
    if(!findUser)
    return 'Wrong username or password!'
    const token = jwt.sign({id: findUser.id}, 'secret')
    return token
}
}