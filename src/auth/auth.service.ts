import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SuperUser } from 'src/entities/superuser.entity';
import { SuperUserService } from 'src/superuser/SuperUser.service';
import { compareHash } from 'src/util/password-util';

@Injectable()
export class AuthService {
    constructor(private superUserService: SuperUserService,
        private jwtService: JwtService
    ) { }

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

    async login(user: any) {
        const payload = { username: user.name, sub: user.id }
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
