import { Module } from '@nestjs/common';
import { UsersServiceModule } from '../../service/users/users.service.module';
import { UsersController } from './users.controller';

@Module({
    controllers: [UsersController],
    imports: [UsersServiceModule]
})
export class UsersControllerModule {}
