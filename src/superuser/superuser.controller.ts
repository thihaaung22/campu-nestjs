import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { CreateSuperUserDto } from './dtos/create.superuser.dto';
import { SuperUserService } from './SuperUser.service';
import { hashInput } from 'src/util/password-util';
import { GeneralExceptionsFilter } from 'src/filters/GeneralExceptionsFilter';

@Controller('api/superusers')
@UseFilters(GeneralExceptionsFilter)
export class SuperUserController {

    constructor(readonly superUserService: SuperUserService) { }

    @Post()
    postSuperUser(@Body() createSuperUserDto: CreateSuperUserDto) {
        const password = hashInput(createSuperUserDto.password)
        const superUser = { ...createSuperUserDto, password }
        return this.superUserService.createSuperUser(superUser)
    }
}
