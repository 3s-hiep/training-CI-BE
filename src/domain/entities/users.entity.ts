import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Areas } from "./areas.entity";
import { Stores } from "./stores.entity";

@Entity()
export class Users extends BaseEntity {
    @PrimaryColumn()
    userId: string;

    @Column()
    userName: string;

    @Column()
    deleteFlag: boolean;

    @OneToMany(() => Stores, store => store.user, { cascade: true })
    stores: Stores[];

    @OneToMany(() => Areas, area => area.user, { cascade: true })
    areas: Areas[];
}