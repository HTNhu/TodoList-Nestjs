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
  // get user by username
  async findOne(username: string): Promise<User> {
    return await this.users.find(user => user.username === username);
  }
  // login create token
  async login(username, password){
    const findUser = this.users.find(x => x.username === username && x.password === password)
    if(!findUser)
    return 'Wrong username or password!'
    const token = jwt.sign({id: findUser.id}, 'secret')
    return token
}
}