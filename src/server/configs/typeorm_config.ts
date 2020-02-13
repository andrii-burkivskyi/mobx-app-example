import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'sqlite',
    database: 'public/server/database.sqlite',

    synchronize: true,
    logging: false,
    entities: ['src/server/models/**/*.entity.ts'],
    // migrationsTableName: "custom_migration_table",
    // migrations: ['src/migrations/**/*{.ts,.js}'],
    // cli: {
    //     migrationsDir: "src/migration"
    // }
};

// @ts-ignore: Unreachable code error
export = config;
