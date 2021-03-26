import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from '../../service/users/users.service';
import { CreateUserDto, IUser, UpdateUserDto } from './users.controller.i';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getUsersList(): Promise<IUser[]> {
        return this.usersService.getUsersList();
    }

    @Get('/:userId')
    getUserById(@Param('userId') userId: string): Promise<IUser> {
        return this.usersService.getUserById(userId);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUserDto): Promise<IUser> {
        return this.usersService.createUser(createUserDto);
    }

    @Put('/:userId')
    @UsePipes(ValidationPipe)
    updateUser(@Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto): Promise<IUser> {
        return this.usersService.updateUser(userId, updateUserDto);
    }

    @Delete('/:userId')
    deleteUser(@Param('userId') userId: string): Promise<void> {
        return this.usersService.deleteUser(userId);
    }

    @Put('/:userId/restore')
    restoreUser(@Param('userId') userId: string): Promise<void> {
        return this.usersService.restoreUser(userId);
    }
}
