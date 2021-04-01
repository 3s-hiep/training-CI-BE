import { BadRequestException, HttpService, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, IArea, IStore, IUser, UpdateUserDto } from './users.service.i';

@Injectable()
export class UsersService {
    constructor(private httpService: HttpService) {     }

    async getInitData(): Promise<IUser[]> {
        let response = await this.httpService.get('https://60652591f0919700177870f1.mockapi.io/users').toPromise();
        let usersList = response.data;
        return usersList.map(user => <IUser>{
            userId: user.userId,
            userName: user.userName,
            deleteFlag: user.deleteFlag,
            areas: user.areas.map(area => {
                return <IArea>{ name: area.name }
            }),
            stores: user.stores.map(store => {
                return <IStore>{ name: store.name }
            })
        })
    }

    private users: Promise< IUser[]> = this.getInitData();

    async getUsersList(): Promise<IUser[]> {
        return this.users;
    }

    async getUserById(userId: string): Promise<IUser> {
        let user = (await this.users).find(user => user.userId === userId);

        if(!user) {
            throw new NotFoundException();
        }

        return user;
    }

    async createUser(createUserDto: CreateUserDto): Promise<IUser> {
        let oldUser = (await this.users).find(user => user.userId === createUserDto.userId);
        if(oldUser) {
            throw new BadRequestException();
        }

        let user: IUser = {
            userId: createUserDto.userId,
            userName: createUserDto.userName,
            deleteFlag: false,
            areas: createUserDto.areas,
            stores: createUserDto.stores,
        }

        await (await this.users).push(user);

        return user;
    }

    async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<IUser> {
        let user = await this.getUserById(userId);
        user.userName = updateUserDto.userName;
        user.areas = updateUserDto.areas;
        user.stores = updateUserDto.stores;

        return user;
    }

    async deleteUser(userId: string): Promise<void> {
        let user = await this.getUserById(userId);
        user.deleteFlag = true;
    }

    async restoreUser(userId: string): Promise<void> {
        let user = await this.getUserById(userId);
        user.deleteFlag = false;
    }
}
