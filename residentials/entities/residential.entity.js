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
exports.Residential = void 0;
const group_entity_1 = require("../../groups/entities/group.entity");
const typeorm_1 = require("typeorm");
let Residential = class Residential {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Residential.prototype, "residential_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Residential.prototype, "residential_group_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Residential.prototype, "residential_name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ select: false, type: 'timestamp' }),
    __metadata("design:type", Date)
], Residential.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ select: false, type: 'timestamp' }),
    __metadata("design:type", Date)
], Residential.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ select: false, type: 'timestamp' }),
    __metadata("design:type", Date)
], Residential.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => group_entity_1.Group),
    (0, typeorm_1.JoinColumn)({ name: 'residential_group_id' }),
    __metadata("design:type", group_entity_1.Group)
], Residential.prototype, "group", void 0);
Residential = __decorate([
    (0, typeorm_1.Entity)('residentials')
], Residential);
exports.Residential = Residential;
//# sourceMappingURL=residential.entity.js.map