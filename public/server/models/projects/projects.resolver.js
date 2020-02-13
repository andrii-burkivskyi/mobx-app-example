"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const type_graphql_1 = require("type-graphql");
const projects_service_1 = require("./projects.service");
const projects_dto_1 = require("./projects.dto");
const create_project_input_1 = require("./inputs/create-project-input");
const update_project_input_1 = require("./inputs/update-project-input");
const delete_project_input_1 = require("./inputs/delete-project-input");
const project_filters_input_1 = require("./inputs/project-filters-input");
const entities_service_1 = require("../entities/entities.service");
let ProjectsResolver = class ProjectsResolver {
    constructor(projectsService, entitiesService) {
        this.projectsService = projectsService;
        this.entitiesService = entitiesService;
    }
    project(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.projectsService.findById(id);
        });
    }
    projects(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.projectsService.findAll(input);
        });
    }
    createProject(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.projectsService.create(input);
        });
    }
    updateProject(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.projectsService.update(input);
        });
    }
    deleteProject(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.projectsService.findById(input.id);
            if (project && project.entities.length > 0) {
                yield this.entitiesService.deleteList(project.entities);
            }
            return yield this.projectsService.delete(input);
        });
    }
};
__decorate([
    graphql_1.Query(() => projects_dto_1.ProjectDTO, { nullable: true }),
    __param(0, graphql_1.Args({ name: 'id', type: () => type_graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "project", null);
__decorate([
    graphql_1.Query(() => projects_dto_1.ProjectPaginationDTO),
    __param(0, graphql_1.Args({ name: "input", type: () => project_filters_input_1.ProjectPaginationInput, defaultValue: {} })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "projects", null);
__decorate([
    graphql_1.Mutation(() => projects_dto_1.ProjectDTO),
    __param(0, graphql_1.Args({ name: 'input', type: () => create_project_input_1.CreateProjectInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_input_1.CreateProjectInput]),
    __metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "createProject", null);
__decorate([
    graphql_1.Mutation(() => projects_dto_1.ProjectDTO),
    __param(0, graphql_1.Args({ name: 'input', type: () => update_project_input_1.UpdateProjectInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_project_input_1.UpdateProjectInput]),
    __metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "updateProject", null);
__decorate([
    graphql_1.Mutation(() => type_graphql_1.Int),
    __param(0, graphql_1.Args({ name: 'input', type: () => delete_project_input_1.DeleteProjectInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_project_input_1.DeleteProjectInput]),
    __metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "deleteProject", null);
ProjectsResolver = __decorate([
    graphql_1.Resolver(() => projects_dto_1.ProjectDTO),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService,
        entities_service_1.EntitiesService])
], ProjectsResolver);
exports.ProjectsResolver = ProjectsResolver;
//# sourceMappingURL=projects.resolver.js.map