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
const entities_service_1 = require("./entities.service");
const entities_dto_1 = require("./entities.dto");
const create_entity_input_1 = require("./inputs/create-entity-input");
const update_entity_input_1 = require("./inputs/update-entity-input");
const delete_entity_input_1 = require("./inputs/delete-entity-input");
const entity_filters_input_1 = require("./inputs/entity-filters-input");
const projects_service_1 = require("../projects/projects.service");
let EntitiesResolver = class EntitiesResolver {
    constructor(entitiesService, projectsService) {
        this.entitiesService = entitiesService;
        this.projectsService = projectsService;
    }
    entity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.entitiesService.findById(id);
        });
    }
    entities(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.entitiesService.findAll(input);
        });
    }
    createEntity(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Object.keys(input.project).length > 1) {
                yield this.projectsService.update(input.project);
            }
            return yield this.entitiesService.create(input);
        });
    }
    updateEntity(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (input.project && Object.keys(input.project).length > 1) {
                yield this.projectsService.update(input.project);
            }
            return yield this.entitiesService.update(input);
        });
    }
    deleteEntity(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.entitiesService.delete(input);
        });
    }
    deleteEntities(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.entitiesService.deleteList(input);
        });
    }
};
__decorate([
    graphql_1.Query(() => entities_dto_1.EntityDTO, { nullable: true }),
    __param(0, graphql_1.Args({ name: 'id', type: () => type_graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EntitiesResolver.prototype, "entity", null);
__decorate([
    graphql_1.Query(() => entities_dto_1.EntityPaginationDTO),
    __param(0, graphql_1.Args({ name: "input", type: () => entity_filters_input_1.EntityPaginationInput, defaultValue: {} })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EntitiesResolver.prototype, "entities", null);
__decorate([
    graphql_1.Mutation(() => entities_dto_1.EntityDTO),
    __param(0, graphql_1.Args({ name: 'input', type: () => create_entity_input_1.CreateEntityInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entity_input_1.CreateEntityInput]),
    __metadata("design:returntype", Promise)
], EntitiesResolver.prototype, "createEntity", null);
__decorate([
    graphql_1.Mutation(() => entities_dto_1.EntityDTO),
    __param(0, graphql_1.Args({ name: 'input', type: () => update_entity_input_1.UpdateEntityInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_entity_input_1.UpdateEntityInput]),
    __metadata("design:returntype", Promise)
], EntitiesResolver.prototype, "updateEntity", null);
__decorate([
    graphql_1.Mutation(() => type_graphql_1.Int),
    __param(0, graphql_1.Args({ name: 'input', type: () => delete_entity_input_1.DeleteEntityInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_entity_input_1.DeleteEntityInput]),
    __metadata("design:returntype", Promise)
], EntitiesResolver.prototype, "deleteEntity", null);
__decorate([
    graphql_1.Mutation(() => [type_graphql_1.Int]),
    __param(0, graphql_1.Args({ name: 'input', type: () => [delete_entity_input_1.DeleteEntityInput], defaultValue: [] })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], EntitiesResolver.prototype, "deleteEntities", null);
EntitiesResolver = __decorate([
    graphql_1.Resolver(() => entities_dto_1.EntityDTO),
    __metadata("design:paramtypes", [entities_service_1.EntitiesService,
        projects_service_1.ProjectsService])
], EntitiesResolver);
exports.EntitiesResolver = EntitiesResolver;
//# sourceMappingURL=entities.resolver.js.map