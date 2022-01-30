import { VisitsService as Service } from './visits.service';
import { CreateVisitDto as CreateDto } from './dto/create-visit.dto';
import { UpdateVisitDto as UpdateDto } from './dto/update-visit.dto';
export declare class VisitsController {
    private readonly service;
    constructor(service: Service);
    create(createDto: CreateDto): Promise<{
        Data: import("./entities/visit.entity").Visit;
    }>;
    findAll(): Promise<{
        Data: import("./entities/visit.entity").Visit[];
    }>;
    findOne(id: string): Promise<{
        Data: import("./entities/visit.entity").Visit;
    }>;
    findBy(code: string): Promise<{
        Data: import("./entities/visit.entity").Visit[];
    }>;
    update(id: string, updateDto: UpdateDto): Promise<{
        Data: import("./entities/visit.entity").Visit;
    }>;
    remove(id: string): Promise<void>;
}
