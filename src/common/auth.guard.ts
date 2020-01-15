import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'
import { UsersService} from '../modules/user/user.service'
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly userService: UsersService){}
    async canActivate(
      context: ExecutionContext,
    ){
    
    const req = context.switchToHttp().getRequest() 
    const decodeToken = req && req.headers.authorization
    console.log(decodeToken)

    const username = 'Nhu ne'
    const foundUser = await this.userService.findOne(username)
    req.user = foundUser
    if(foundUser) return true
    return false;
  }
}