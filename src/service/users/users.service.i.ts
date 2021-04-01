export type GetUserResponse = Array<IUser>;

export interface IArea {
    name: string;
}

export interface IStore {
    name: string;
}

export interface IUser {
    userId: string;
    userName: string;
    deleteFlag: boolean;
    areas: Array<IArea>;
    stores: Array<IStore>;
}

export class CreateUserDto {
    userId: string;
    userName: string;
    areas: Array<IArea>;
    stores: Array<IStore>;
}

export class UpdateUserDto {
    userName: string;
    areas: Array<IArea>;
    stores: Array<IStore>;
}