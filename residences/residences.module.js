"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResidencesModule = void 0;
const common_1 = require("@nestjs/common");
const residences_service_1 = require("./residences.service");
const residences_controller_1 = require("./residences.controller");
const residence_entity_1 = require("./entities/residence.entity");
const typeorm_1 = require("@nestjs/typeorm");
let ResidencesModule = class ResidencesModule {
};
ResidencesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([residence_entity_1.Residence])],
        controllers: [residences_controller_1.ResidencesController],
        providers: [residences_service_1.ResidencesService],
    })
], ResidencesModule);
exports.ResidencesModule = ResidencesModule;
//# sourceMappingURL=residences.module.js.map