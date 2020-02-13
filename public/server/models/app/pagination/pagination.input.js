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
exports.PaginationInput = (TItemFilter) => {
    let PaginationInputClass = class PaginationInputClass {
    };
    __decorate([
        type_graphql_1.Field(type => TItemFilter, { nullable: true, defaultValue: {} }),
        __metadata("design:type", Object)
    ], PaginationInputClass.prototype, "filter", void 0);
    __decorate([
        type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true, defaultValue: 0 }),
        __metadata("design:type", Number)
    ], PaginationInputClass.prototype, "page", void 0);
    __decorate([
        type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true, defaultValue: 20 }),
        __metadata("design:type", Number)
    ], PaginationInputClass.prototype, "take", void 0);
    PaginationInputClass = __decorate([
        type_graphql_1.InputType({ isAbstract: true })
    ], PaginationInputClass);
    return PaginationInputClass;
};
//# sourceMappingURL=pagination.input.js.map