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
exports.PaginationDTO = (DTO) => {
    let PaginationDTOClass = class PaginationDTOClass {
    };
    __decorate([
        type_graphql_1.Field(() => [DTO]),
        __metadata("design:type", Array)
    ], PaginationDTOClass.prototype, "items", void 0);
    __decorate([
        type_graphql_1.Field(() => type_graphql_1.Int),
        __metadata("design:type", Number)
    ], PaginationDTOClass.prototype, "totalItems", void 0);
    __decorate([
        type_graphql_1.Field(() => type_graphql_1.Int),
        __metadata("design:type", Number)
    ], PaginationDTOClass.prototype, "take", void 0);
    __decorate([
        type_graphql_1.Field(() => type_graphql_1.Int),
        __metadata("design:type", Number)
    ], PaginationDTOClass.prototype, "page", void 0);
    PaginationDTOClass = __decorate([
        type_graphql_1.ObjectType({ isAbstract: true })
    ], PaginationDTOClass);
    return PaginationDTOClass;
};
//# sourceMappingURL=pagination.dto.js.map