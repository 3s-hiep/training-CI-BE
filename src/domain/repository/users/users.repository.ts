import { NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Users } from "../../entities/users.entity";
import { CreateUserDto, UpdateUserDto } from "./users.repository.i";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users>{
    async getUsersList(): Promise<Users[]> {
        return await Users.find();
    }

    async getUserById(userId: string): Promise<Users> {
        const user = await Users.findOne({ userId: userId });

        if (!user) {
            throw new NotFoundException();
        }

        return user;
    }

    async createUser(createUserDto: CreateUserDto): Promise<Users> {
        const user = new Users();
        user.userId = createUserDto.userId;
        user.userName = createUserDto.userName;
        user.deleteFlag = false;
        user.stores = createUserDto.stores;
        user.areas = createUserDto.areas
        await user.save();

        return user;
    }

    async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<Users> {
        const user = await this.getUserById(userId);
        user.userName = updateUserDto.userName;
        // user.stores = updateUserDto.stores;
        // user.areas = updateUserDto.areas;
        await user.save();

        return user;
    }

    async deleteUser(userId: string): Promise<void> {
        const user = await this.getUserById(userId);
        user.deleteFlag = true;
        await user.save();
    }

    async restoreUser(userId: string): Promise<void> {
        const user = await this.getUserById(userId);
        user.deleteFlag = false;
        await user.save();
    }
}