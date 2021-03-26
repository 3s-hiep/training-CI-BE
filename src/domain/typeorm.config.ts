import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Thanh321995',
    database: 'UserManagement',
    entities: [__dirname + '/entities/*.js'],
    synchronize: true,
}