import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SuperUserModule } from './superuser/superuser.module';
import { CampManagersModule } from './camp_managers/camp_managers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormconfig } from './config/database/ormconfig';
import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory() {
      return ormconfig
    },
    async dataSourceFactory(options) {
      if (!options) {
        throw new Error("Invalid options passed.")
      }
      return addTransactionalDataSource(new DataSource(options))
    }
  }), UsersModule, CampManagersModule, AuthModule, SuperUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
