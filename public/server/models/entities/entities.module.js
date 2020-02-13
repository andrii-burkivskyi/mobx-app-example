"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_resolver_1 = require("./entities.resolver");
const entities_service_1 = require("./entities.service");
const entities_entity_1 = require("./entities.entity");
const projects_entity_1 = require("../projects/projects.entity");
const projects_service_1 = require("../projects/projects.service");
let EntitiesModule = class EntitiesModule {
};
EntitiesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_entity_1.EntityEntity, projects_entity_1.ProjectEntity])],
        providers: [entities_resolver_1.EntitiesResolver, entities_service_1.EntitiesService, projects_service_1.ProjectsService],
    })
], EntitiesModule);
exports.EntitiesModule = EntitiesModule;
//# sourceMappingURL=entities.module.js.map