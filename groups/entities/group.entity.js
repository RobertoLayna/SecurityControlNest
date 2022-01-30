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
exports.Group = void 0;
const typeorm_1 = require("typeorm");
let Group = class Group {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Group.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Group.prototype, "group_name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ select: false, type: 'timestamp' }),
    __metadata("design:type", Date)
], Group.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ select: false, type: 'timestamp' }),
    __metadata("design:type", Date)
], Group.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ select: false, type: 'timestamp' }),
    __metadata("design:type", Date)
], Group.prototype, "deleted_at", void 0);
Group = __decorate([
    (0, typeorm_1.Entity)('groups')
], Group);
exports.Group = Group;
//# sourceMappingURL=group.entity.js.map