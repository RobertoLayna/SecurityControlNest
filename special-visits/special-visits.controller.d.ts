import { SpecialVisitsService as Service } from './special-visits.service';
import { CreateSpecialVisitDto as CreateDto } from './dto/create-special-visit.dto';
import { UpdateSpecialVisitDto as UpdateDto } from './dto/update-special-visit.dto';
export declare class SpecialVisitsController {
    private readonly service;
    constructor(service: Service);
    create(createResidenceDto: CreateDto): Promise<{
        Data: import("./entities/special-visit.entity").SpecialVisit;
    }>;
    findAll(): Promise<{
        Data: import("./entities/special-visit.entity").SpecialVisit[];
    }>;
    findOne(id: string): Promise<{
        Data: import("./entities/special-visit.entity").SpecialVisit;
    }>;
    update(id: string, updateResidenceDto: UpdateDto): Promise<{
        Data: import("./entities/special-visit.entity").SpecialVisit;
    }>;
    remove(id: string): Promise<void>;
}
