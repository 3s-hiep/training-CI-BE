import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from '../../domain/repository/users/users.repository';
import { CreateUserDto, IUser, UpdateUserDto } from './users.service.i';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UsersRepository) private usersRepository: UsersRepository) { }

    async getUsersList(): Promise<IUser[]> {
        return this.usersRepository.getUsersList();
    }

    async getUserById(userId: string): Promise<IUser> {
        return this.usersRepository.getUserById(userId);
    }

    async createUser(createUserDto: CreateUserDto): Promise<IUser> {
        return this.usersRepository.createUser(createUserDto);
    }

    async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<IUser> {
        return this.usersRepository.updateUser(userId, updateUserDto);
    }

    async deleteUser(userId: string): Promise<void> {
        return this.usersRepository.deleteUser(userId);
    }

    async restoreUser(userId: string): Promise<void> {
        return this.usersRepository.restoreUser(userId);
    }
}
