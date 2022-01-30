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
exports.UpdateUserDto = void 0;
const class_validator_1 = require("class-validator");
class UpdateUserDto {
}
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('user_residence_id')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "user_residence_id", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('user_complete_name')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "user_complete_name", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('user_name')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "user_name", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('user_password')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "user_password", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('user_phone')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "user_phone", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('user_rol')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "user_rol", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('user_active')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateUserDto.prototype, "user_active", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map