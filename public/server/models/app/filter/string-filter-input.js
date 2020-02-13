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
const filter_types_1 = require("./filter.types");
let StringFilterInput = class StringFilterInput {
};
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], StringFilterInput.prototype, "equal", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], StringFilterInput.prototype, "not_equal", void 0);
__decorate([
    type_graphql_1.Field(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], StringFilterInput.prototype, "in", void 0);
__decorate([
    type_graphql_1.Field(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], StringFilterInput.prototype, "not_in", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], StringFilterInput.prototype, "contains", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], StringFilterInput.prototype, "not_contains", void 0);
__decorate([
    type_graphql_1.Field(type => filter_types_1.Order, { nullable: true }),
    __metadata("design:type", String)
], StringFilterInput.prototype, "order", void 0);
StringFilterInput = __decorate([
    type_graphql_1.InputType()
], StringFilterInput);
exports.StringFilterInput = StringFilterInput;
//# sourceMappingURL=string-filter-input.js.map