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
exports.UpdateLogDto = void 0;
const class_validator_1 = require("class-validator");
class UpdateLogDto {
}
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('log_user_id')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateLogDto.prototype, "log_user_id", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('log_action')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateLogDto.prototype, "log_action", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('log_table')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateLogDto.prototype, "log_table", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('log_before')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateLogDto.prototype, "log_before", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => Object.keys(o).length == 0 || o.hasOwnProperty('log_after')),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateLogDto.prototype, "log_after", void 0);
exports.UpdateLogDto = UpdateLogDto;
//# sourceMappingURL=update-log.dto.js.map