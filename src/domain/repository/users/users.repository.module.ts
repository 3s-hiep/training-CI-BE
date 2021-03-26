import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';

@Module({
    imports: [TypeOrmModule.forFeature([UsersRepository])],
    providers: [UsersRepository],
    exports: [UsersRepository]
})
export class UsersRepositoryModule { }
