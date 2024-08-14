import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { join } from "path";
import settings from "../settings";
import { SuperUser } from "src/entities/superuser.entity";

export const ormconfig: TypeOrmModuleOptions & SeederOptions & DataSourceOptions = {
    type: "postgres",
    host: settings.DATABASE.HOST,
    port: parseInt(settings.DATABASE.PORT, 10) || 5432,
    username: settings.DATABASE.USERNAME,
    password: settings.DATABASE.PASSWORD,
    database: settings.DATABASE.NAME,
    schema: "public",
    synchronize: true,
    logging: true,
    entities: [
        //join(__dirname, "/../entities/**/*.entity{.ts,.js}")
        SuperUser
    ],
}