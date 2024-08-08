import { Module } from '@nestjs/common';
import { SuperUserService } from './SuperUser.service';
import { SuperUserController } from './SuperUser.controller';
import { SuperUser } from 'src/entities/superuser.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([SuperUser])],
    providers: [SuperUserService],
    controllers: [SuperUserController]
})
export class SuperUserModule { }
