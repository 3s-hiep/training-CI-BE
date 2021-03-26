import { IsNotEmpty } from "class-validator";
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

export class CreateUserDto {
    @IsNotEmpty()
    userId: string;

    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    stores: Array<IStore>;

    @IsNotEmpty()
    areas: Array<IAreas>;
}

export class UpdateUserDto {
    @IsNotEmpty()
    userName: string;
    
    // @IsNotEmpty()
    // stores: Array<IStore>;

    // @IsNotEmpty()
    // areas: Array<IAreas>;
}