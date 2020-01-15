import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { TodoService } from './modules/todo/todo.service';
import { TodoModule } from './modules/todo/todo.module';
import { UserController } from './modules/user/user.controller';

@Module({
  imports: [AuthModule, UserModule, TodoModule],
  controllers: [AppController, UserController],
  providers: [AppService, TodoService],
})
export class AppModule {}
