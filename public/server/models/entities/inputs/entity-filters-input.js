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
const filter_1 = require("../../app/filter");
const pagination_input_1 = require("../../app/pagination/pagination.input");
const project_filters_input_1 = require("../../projects/inputs/project-filters-input");
let EntityFilterInput = class EntityFilterInput {
};
__decorate([
    type_graphql_1.Field(() => filter_1.IdFilterInput, { nullable: true }),
    __metadata("design:type", filter_1.IdFilterInput)
], EntityFilterInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => filter_1.StringFilterInput, { nullable: true }),
    __metadata("design:type", filter_1.StringFilterInput)
], EntityFilterInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => project_filters_input_1.ProjectFilterInput, { nullable: true }),
    __metadata("design:type", project_filters_input_1.ProjectFilterInput)
], EntityFilterInput.prototype, "project", void 0);
EntityFilterInput = __decorate([
    type_graphql_1.InputType()
], EntityFilterInput);
exports.EntityFilterInput = EntityFilterInput;
let EntityPaginationInput = class EntityPaginationInput extends pagination_input_1.PaginationInput(EntityFilterInput) {
};
EntityPaginationInput = __decorate([
    type_graphql_1.InputType()
], EntityPaginationInput);
exports.EntityPaginationInput = EntityPaginationInput;
;
//# sourceMappingURL=entity-filters-input.js.map