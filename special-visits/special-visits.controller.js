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
exports.SpecialVisitsController = void 0;
const common_1 = require("@nestjs/common");
const special_visits_service_1 = require("./special-visits.service");
const create_special_visit_dto_1 = require("./dto/create-special-visit.dto");
const update_special_visit_dto_1 = require("./dto/update-special-visit.dto");
let SpecialVisitsController = class SpecialVisitsController {
    constructor(service) {
        this.service = service;
    }
    async create(createResidenceDto) {
        const register = await this.service.create(createResidenceDto);
        const Data = await this.service.findOne(register.special_visit_id);
        return { Data };
    }
    async findAll() {
        const Data = (await this.service.findAll()) || [];
        return { Data };
    }
    async findOne(id) {
        const Data = (await this.service.findOne(+id)) || null;
        return { Data };
    }
    async update(id, updateResidenceDto) {
        const register = await this.service.update(+id, updateResidenceDto);
        const Data = await this.service.findOne(register.special_visit_id);
        return { Data };
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_special_visit_dto_1.CreateSpecialVisitDto]),
    __metadata("design:returntype", Promise)
], SpecialVisitsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpecialVisitsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SpecialVisitsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_special_visit_dto_1.UpdateSpecialVisitDto]),
    __metadata("design:returntype", Promise)
], SpecialVisitsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SpecialVisitsController.prototype, "remove", null);
SpecialVisitsController = __decorate([
    (0, common_1.Controller)('special-visits'),
    __metadata("design:paramtypes", [special_visits_service_1.SpecialVisitsService])
], SpecialVisitsController);
exports.SpecialVisitsController = SpecialVisitsController;
//# sourceMappingURL=special-visits.controller.js.map