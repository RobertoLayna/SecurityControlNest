import { ResidentialsService as Service } from './residentials.service';
import { CreateResidentialDto as CreateDto } from './dto/create-residential.dto';
import { UpdateResidentialDto as UpdateDto } from './dto/update-residential.dto';
export declare class ResidentialsController {
    private readonly service;
    constructor(service: Service);
    create(createResidenceDto: CreateDto): Promise<{
        Data: import("./entities/residential.entity").Residential;
    }>;
    findAll(): Promise<{
        Data: import("./entities/residential.entity").Residential[];
    }>;
    findOne(id: string): Promise<{
        Data: import("./entities/residential.entity").Residential;
    }>;
    update(id: string, updateResidenceDto: UpdateDto): Promise<{
        Data: import("./entities/residential.entity").Residential;
    }>;
    remove(id: string): Promise<void>;
}
