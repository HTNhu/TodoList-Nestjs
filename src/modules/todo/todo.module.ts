import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module'
import { UsersService } from '../user/user.service'
import { TodoService } from '../todo/todo.service'
import { TodoController } from './todo.controller';
@Module({
  imports: [UserModule],
  // controllers: [TaskController],
  providers: [TodoService, UsersService],
  controllers: [TodoController]

})
export class TodoModule {}
