import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SuperUserModule } from 'src/superuser/superuser.module';
import { PassportModule } from '@nestjs/passport';
import { AuthSuperUserStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import settings from 'src/config/settings';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [SuperUserModule, PassportModule,
    JwtModule.register({
      secret: settings.JWT_SECRET,
      signOptions: { expiresIn: "60s" }
    })],
  providers: [AuthService, AuthSuperUserStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }
