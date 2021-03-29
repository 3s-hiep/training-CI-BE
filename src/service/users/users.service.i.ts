import { IAreas } from "../areas/areas.service.i";
import { IStore } from "../stores/stores.service.i";

export type GetUserResponse = Array<IUser>;

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