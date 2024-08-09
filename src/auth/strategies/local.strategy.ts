import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from 'passport-local'
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";


@Injectable()
export class AuthSuperUserStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: "email" })
    }

    async validate(email: string, password: string): Promise<any> {
        const user = await this.authService.validateSuperUser(email, password)
        if (!user) {
            throw new UnauthorizedException()
        }
        return user
    }
}