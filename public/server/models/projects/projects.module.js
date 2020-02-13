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
const projects_resolver_1 = require("./projects.resolver");
const projects_service_1 = require("./projects.service");
const projects_entity_1 = require("./projects.entity");
const entities_entity_1 = require("../entities/entities.entity");
const entities_service_1 = require("../entities/entities.service");
let ProjectsModule = class ProjectsModule {
};
ProjectsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([projects_entity_1.ProjectEntity, entities_entity_1.EntityEntity])],
        providers: [projects_resolver_1.ProjectsResolver, projects_service_1.ProjectsService, entities_service_1.EntitiesService],
    })
], ProjectsModule);
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=projects.module.js.map