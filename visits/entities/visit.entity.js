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
exports.Visit = void 0;
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Visit = class Visit {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Visit.prototype, "visit_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Visit.prototype, "visit_user_id", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Visit.prototype, "visit_start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Visit.prototype, "visit_end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", Date)
], Visit.prototype, "visit_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", Date)
], Visit.prototype, "visit_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Visit.prototype, "visit_identifier", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Visit.prototype, "visit_visitor_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Visit.prototype, "visit_completed", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ select: false, type: 'timestamp' }),
    __metadata("design:type", Date)
], Visit.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ select: false, type: 'timestamp' }),
    __metadata("design:type", Date)
], Visit.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ select: false, type: 'timestamp' }),
    __metadata("design:type", Date)
], Visit.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'visit_user_id' }),
    __metadata("design:type", user_entity_1.User)
], Visit.prototype, "user", void 0);
Visit = __decorate([
    (0, typeorm_1.Entity)('visits')
], Visit);
exports.Visit = Visit;
//# sourceMappingURL=visit.entity.js.map