import * as path from "path";
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from "@nestjs/typeorm";

import { ProjectsModule } from "../projects/projects.module";
import { EntitiesModule } from "../entities/entities.module";

import typeormConfig from "../../configs/typeorm_config"
import { EntityEntity } from "../entities/entities.entity";
import { ProjectEntity } from "../projects/projects.entity";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, '../..'),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'public/server/database.sqlite',

      synchronize: true,
      logging: false,
      entities: [EntityEntity, ProjectEntity],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql"
    }),
    ProjectsModule,
    EntitiesModule,
  ],
})
export class AppModule {}
