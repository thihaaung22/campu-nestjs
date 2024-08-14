import { Module } from '@nestjs/common';
import { SuperUserService } from './SuperUser.service';
import { SuperUserController } from './SuperUser.controller';
import { SuperUser } from 'src/entities/superuser.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([SuperUser])],
    controllers: [SuperUserController],
    providers: [SuperUserService],
    exports: [SuperUserService]
})
export class SuperUserModule { }
