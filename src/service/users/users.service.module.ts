import { Module } from '@nestjs/common';
import { UsersRepositoryModule } from '../../domain/repository/users/users.repository.module';
import { UsersService } from './users.service';

@Module({
  imports: [UsersRepositoryModule],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersServiceModule { }
