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
const update_project_input_1 = require("../../projects/inputs/update-project-input");
let UpdateEntityInput = class UpdateEntityInput {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], UpdateEntityInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateEntityInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => update_project_input_1.UpdateProjectInput, { nullable: true }),
    __metadata("design:type", update_project_input_1.UpdateProjectInput)
], UpdateEntityInput.prototype, "project", void 0);
UpdateEntityInput = __decorate([
    type_graphql_1.InputType()
], UpdateEntityInput);
exports.UpdateEntityInput = UpdateEntityInput;
//# sourceMappingURL=update-entity-input.js.map