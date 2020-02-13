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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mergeStrategy_1 = require("../../utils/mergeStrategy");
const buildFindOptions_1 = require("../../utils/buildFindOptions");
const entities_entity_1 = require("./entities.entity");
let EntitiesService = class EntitiesService {
    constructor(entitiesRepository) {
        this.entitiesRepository = entitiesRepository;
    }
    findAll(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const joins = [{ type: buildFindOptions_1.JoinType.LEFT, alias: "project" }];
            return buildFindOptions_1.getPaginationResponse(this.entitiesRepository, input, joins);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.entitiesRepository.findOne({ id }, { relations: ["project"] });
        });
    }
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = this.entitiesRepository.create(input);
            const response = yield this.entitiesRepository.save(entity);
            return yield this.findById(response.id);
        });
    }
    update(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentEntity = yield this.entitiesRepository.findOne({ id: input.id });
            if (currentEntity) {
                const { project } = input, entityProps = __rest(input, ["project"]);
                const entity = this.entitiesRepository.create(mergeStrategy_1.merge(currentEntity, entityProps));
                yield this.entitiesRepository.save(entity, { reload: false });
                return yield this.findById(input.id);
                ;
            }
            throw new common_1.HttpException(`Can't find entity with id [${input.id}]`, common_1.HttpStatus.NOT_FOUND);
        });
    }
    delete(input) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.entitiesRepository.delete(input.id);
            return input.id;
        });
    }
    deleteList(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const ids = input.map((entity) => entity.id);
            yield this.entitiesRepository.delete(ids);
            return ids;
        });
    }
};
EntitiesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(entities_entity_1.EntityEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EntitiesService);
exports.EntitiesService = EntitiesService;
//# sourceMappingURL=entities.service.js.map