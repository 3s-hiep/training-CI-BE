import { IsNotEmpty } from "class-validator";

export type GetUserResponse = Array<IUser>

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
    @IsNotEmpty()
    userId: string;

    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    areas: Array<IArea>;

    @IsNotEmpty()
    stores: Array<IStore>;
}

export class UpdateUserDto {
    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    areas: Array<IArea>;

    @IsNotEmpty()
    stores: Array<IStore>;
}