import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserController } from './user.controller';

@Module({
  exports: [UsersService],
  providers: [UsersService],
  controllers: [UserController]
})
export class UserModule {}
