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
const typeorm_1 = require("typeorm");
const entities_entity_1 = require("../entities/entities.entity");
let ProjectEntity = class ProjectEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProjectEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProjectEntity.prototype, "color", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProjectEntity.prototype, "url", void 0);
__decorate([
    typeorm_1.OneToMany(type => entities_entity_1.EntityEntity, entity => entity.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "entities", void 0);
ProjectEntity = __decorate([
    typeorm_1.Entity()
], ProjectEntity);
exports.ProjectEntity = ProjectEntity;
//# sourceMappingURL=projects.entity.js.map