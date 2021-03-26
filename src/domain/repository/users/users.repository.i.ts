
export interface IStore {
    name: string;
}

export interface IAreas {
    name: string;
}

export class CreateUserDto {
    userId: string;
    userName: string;
    stores: Array<IStore>;
    areas: Array<IAreas>;
}

export class UpdateUserDto {
    userName: string;
    // stores: Array<IStore>;
    // areas: Array<IAreas>;
}