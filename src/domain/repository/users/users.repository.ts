import { BadRequestException, NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Areas } from "../../../domain/entities/areas.entity";
import { Stores } from "../../../domain/entities/stores.entity";
import { Users } from "../../entities/users.entity";
import { CreateUserDto, IAreas, IStore, IUser, UpdateUserDto } from "./users.repository.i";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users>{

    async getUsersList(): Promise<IUser[]> {
        var users = await Users.find({ relations: ['areas', 'stores'] });

        return users.map((user) => <IUser>{
            userId: user.userId,
            userName: user.userName,
            deleteFlag: user.deleteFlag,
            areas: user.areas.map((item) => {
                return <IAreas>{ name: item.name }
            }),
            stores: user.stores.map((item) => {
                return <IStore>{ name: item.name }
            })
        })
    }

    async getUserById(userId: string): Promise<IUser> {
        const user = await Users.findOne({ userId: userId }, { relations: ['areas', 'stores'] });

        if (!user) {
            throw new NotFoundException();
        }

        return <IUser>{
            userId: user.userId,
            userName: user.userName,
            deleteFlag: user.deleteFlag,
            stores: user.stores.map((item) => {
                return <IStore>{ name: item.name }
            }),
            areas: user.areas.map((item) => {
                return <IAreas>{ name: item.name }
            })
        };
    }

    async createUser(createUserDto: CreateUserDto): Promise<IUser> {
        if (await Users.findOne({ userId: createUserDto.userId })) {
            throw new BadRequestException();
        }

        const user = new Users();
        user.userId = createUserDto.userId;
        user.userName = createUserDto.userName;
        user.deleteFlag = false;
        user.areas = createUserDto.areas.map((item) => {
            const area = new Areas();
            area.name = item.name;
            return area;
        })
        user.stores = createUserDto.stores.map((item => {
            const store = new Stores();
            store.name = item.name;
            return store;
        }))
        await user.save();

        return this.getUserById(user.userId);
    }

    async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<IUser> {
        const user = await this.getUser(userId);
        Stores.delete({ user });
        Areas.delete({ user });

        user.userName = updateUserDto.userName;
        user.areas = updateUserDto.areas.map((item) => {
            const area = new Areas();
            area.name = item.name;
            return area;
        })
        user.stores = updateUserDto.stores.map((item) => {
            const store = new Stores();
            store.name = item.name;
            return store;
        })
        await user.save();

        return this.getUserById(user.userId);
    }

    async deleteUser(userId: string): Promise<void> {
        const user = await this.getUser(userId);
        user.deleteFlag = true;
        await user.save();
    }

    async restoreUser(userId: string): Promise<void> {
        const user = await this.getUser(userId);
        user.deleteFlag = false;
        await user.save();
    }

    private async getUser(userId: string): Promise<Users> {
        const user = await Users.findOne({ userId: userId });

        if (!user) {
            throw new NotFoundException();
        }

        return user;
    }
}