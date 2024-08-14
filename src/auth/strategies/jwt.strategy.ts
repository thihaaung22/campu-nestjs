import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import settings from "src/config/settings";
import { JwtPayload } from "src/types/jwt.payload.type";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: settings.JWT_SECRET
        })
    }

    async validate(payload: JwtPayload) {
        return { userId: payload.sub, username: payload.username }
    }
}
