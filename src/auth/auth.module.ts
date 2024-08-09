import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SuperUserModule } from 'src/superuser/superuser.module';
import { PassportModule } from '@nestjs/passport';
import { AuthSuperUserStrategy } from './strategies/local.strategy';

@Module({
  imports: [SuperUserModule, PassportModule],
  providers: [AuthService, AuthSuperUserStrategy]
})
export class AuthModule { }
