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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const visit_entity_1 = require("./entities/visit.entity");
const nanoid_1 = require("nanoid");
let VisitsService = class VisitsService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(createDto) {
        const qrIdentifier = (0, nanoid_1.nanoid)(6);
        const register = await this.repository.create(Object.assign(Object.assign({}, createDto), { visit_id: null, visit_identifier: qrIdentifier }));
        return await this.repository.save(register);
    }
    find(options) {
        return this.repository.find(options);
    }
    findAll() {
        return this.repository.find();
    }
    async findOne(id) {
        return await this.repository.findOne(id);
    }
    async update(id, updateDto) {
        await this.repository.update(id, updateDto);
        return await this.repository.findOne(id);
    }
    async remove(id) {
        await this.repository.softDelete(id);
    }
};
VisitsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(visit_entity_1.Visit)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VisitsService);
exports.VisitsService = VisitsService;
//# sourceMappingURL=visits.service.js.map