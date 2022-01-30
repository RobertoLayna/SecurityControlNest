"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialVisitsModule = void 0;
const common_1 = require("@nestjs/common");
const special_visits_service_1 = require("./special-visits.service");
const special_visits_controller_1 = require("./special-visits.controller");
const special_visit_entity_1 = require("./entities/special-visit.entity");
const typeorm_1 = require("@nestjs/typeorm");
let SpecialVisitsModule = class SpecialVisitsModule {
};
SpecialVisitsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([special_visit_entity_1.SpecialVisit])],
        controllers: [special_visits_controller_1.SpecialVisitsController],
        providers: [special_visits_service_1.SpecialVisitsService],
    })
], SpecialVisitsModule);
exports.SpecialVisitsModule = SpecialVisitsModule;
//# sourceMappingURL=special-visits.module.js.map