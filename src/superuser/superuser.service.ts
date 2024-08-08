import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SuperUser } from 'src/entities/superuser.entity';
import { Repository } from 'typeorm';
import { CreateSuperUserInterface } from './interfaces/create.superuser.interface';

@Injectable()
export class SuperUserService {
    constructor(@InjectRepository(SuperUser) private repository: Repository<SuperUser>) { }

    createSuperUser(user: CreateSuperUserInterface) {
        return this.repository.save(user)
    }
}
