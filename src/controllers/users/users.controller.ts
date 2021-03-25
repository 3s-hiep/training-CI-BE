import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from '../../service/users/users.service';
import { CreateUserDto, UpdateUserDto, IUser } from './users.controller.i';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getUsersList(): IUser[] {
        return this.usersService.getUsersList();
    }

    @Get('/:userId')
    getUserById(@Param('userId') userId: string): IUser {
        return this.usersService.getUserById(userId);
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto): IUser {
        return this.usersService.createUser(createUserDto);
    }

    @Put('/:userId')
    updateUser(@Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto): IUser {
        return this.usersService.updateUser(userId, updateUserDto);
    }

    @Delete('/:userId')
    deleteUser(@Param('userId') userId: string): void {
        this.usersService.deleteUser(userId);
    }

    @Put('/:userId/restore')
    restoreUser(@Param('userId') userId: string): void {
        this.usersService.restoreUser(userId);
    }
}
