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
exports.UpdateVisitDto = void 0;
const class_validator_1 = require("class-validator");
class UpdateVisitDto {
}
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('visit_user_id')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateVisitDto.prototype, "visit_user_id", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('visit_start_date')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], UpdateVisitDto.prototype, "visit_start_date", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('visit_end_date')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateVisitDto.prototype, "visit_end_date", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('visit_start_time')),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], UpdateVisitDto.prototype, "visit_start_time", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('visit_end_time')),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], UpdateVisitDto.prototype, "visit_end_time", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('visit_visitor_name')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateVisitDto.prototype, "visit_visitor_name", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('visit_completed')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateVisitDto.prototype, "visit_completed", void 0);
exports.UpdateVisitDto = UpdateVisitDto;
//# sourceMappingURL=update-visit.dto.js.map