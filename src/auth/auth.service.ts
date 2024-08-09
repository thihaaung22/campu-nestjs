import { Injectable } from '@nestjs/common';
import { SuperUserService } from 'src/superuser/SuperUser.service';
import { compareHash } from 'src/util/password-util';

@Injectable()
export class AuthService {
    constructor(private superUserService: SuperUserService) { }

    async validateSuperUser(email: string, password: string) {
        //find user by email
        const superUser = await this.superUserService.findOne(email)
        if (superUser) {
            if (compareHash(password, superUser.password)) {
                return superUser
            }
        }
        return null;
    }
}
