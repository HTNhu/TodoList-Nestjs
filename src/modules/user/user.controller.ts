import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './user.service'
@Controller('user')
export class UserController {
    constructor(
        private readonly userService : UsersService
    ){}
    @Post('/login')
    async login(
        @Body() body
    ) {
        return await this.userService.login(body.username, body.password)
    }
}
