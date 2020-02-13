"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const projects_module_1 = require("../projects/projects.module");
const entities_module_1 = require("../entities/entities.module");
const entities_entity_1 = require("../entities/entities.entity");
const projects_entity_1 = require("../projects/projects.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.resolve(__dirname, '../..'),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'public/server/database.sqlite',
                synchronize: true,
                logging: false,
                entities: [entities_entity_1.EntityEntity, projects_entity_1.ProjectEntity],
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: "schema.gql"
            }),
            projects_module_1.ProjectsModule,
            entities_module_1.EntitiesModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map