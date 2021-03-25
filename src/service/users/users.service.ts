import { Injectable } from '@nestjs/common';
import { CreateUserDto, IUser, UpdateUserDto } from './users.service.i';

@Injectable()
export class UsersService {
    private users: IUser[] = [];

    getUsersList(): IUser[] {
        return this.users
    }

    getUserById(userId: string): IUser {
        return this.users.find(user => user.userId === userId);
    }

    createUser(createUserDto: CreateUserDto): IUser {
        const user: IUser = {
            userId: createUserDto.userId,
            userName: createUserDto.userName,
            deleteFlag: false,
            stores: createUserDto.stores,
            areas: createUserDto.areas
        };

        this.users.push(user);
        return user;
    }

    updateUser(userId: string, updateUserDto: UpdateUserDto): IUser {
        var user = this.users.find(user => user.userId = userId);
        user.userName = updateUserDto.userName;
        user.stores = updateUserDto.stores;
        user.areas = updateUserDto.areas;

        return user;
    }

    deleteUser(userId: string): void {
        var user = this.users.find(user => user.userId = userId);
        user.deleteFlag = true;
    }

    restoreUser(userId: string): void {
        var user = this.users.find(user => user.userId = userId);
        user.deleteFlag = false;
    }
}
