import { IAreas } from "../areas/areas.controller.i";
import { IStore } from "../stores/stores.controller.i";

export type GetUserResponse = Array<IUser>;

export interface IUser {
    userId: string;
    userName: string;
    deleteFlag: boolean;
    stores: Array<IStore>;
    areas: Array<IAreas>;
}

export interface CreateUserDto {
    userId: string;
    userName: string;
    stores: Array<IStore>;
    areas: Array<IAreas>;
}

export interface UpdateUserDto {
    userName: string;
    stores: Array<IStore>;
    areas: Array<IAreas>;
}