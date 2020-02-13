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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const pagination_dto_1 = require("../app/pagination/pagination.dto");
const entities_dto_1 = require("../entities/entities.dto");
let ProjectDTO = class ProjectDTO {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], ProjectDTO.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProjectDTO.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProjectDTO.prototype, "color", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProjectDTO.prototype, "url", void 0);
__decorate([
    type_graphql_1.Field(type => [entities_dto_1.EntityDTO], { defaultValue: [] }),
    __metadata("design:type", Array)
], ProjectDTO.prototype, "entities", void 0);
ProjectDTO = __decorate([
    type_graphql_1.ObjectType()
], ProjectDTO);
exports.ProjectDTO = ProjectDTO;
let ProjectPaginationDTO = class ProjectPaginationDTO extends pagination_dto_1.PaginationDTO(ProjectDTO) {
};
ProjectPaginationDTO = __decorate([
    type_graphql_1.ObjectType()
], ProjectPaginationDTO);
exports.ProjectPaginationDTO = ProjectPaginationDTO;
;
//# sourceMappingURL=projects.dto.js.map