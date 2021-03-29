export type GetUserResponse = Array<IUser>;

export interface IStore {
    name: string;
}

export interface IAreas {
    name: string;
}

export interface IUser {
    userId: string;
    userName: string;
    deleteFlag: boolean;
    stores: Array<IStore>;
    areas: Array<IAreas>;
}

export class CreateUserDto {
    userId: string;
    userName: string;
    stores: Array<IStore>;
    areas: Array<IAreas>;
}

export class UpdateUserDto {
    userName: string;
    stores: Array<IStore>;
    areas: Array<IAreas>;
}