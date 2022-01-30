import { ResidencesService as Service } from './residences.service';
import { CreateResidenceDto as CreateDto } from './dto/create-residence.dto';
import { UpdateResidenceDto as UpdateDto } from './dto/update-residence.dto';
export declare class ResidencesController {
    private readonly service;
    constructor(service: Service);
    create(createResidenceDto: CreateDto): Promise<{
        Data: import("./entities/residence.entity").Residence;
    }>;
    findAll(): Promise<{
        Data: import("./entities/residence.entity").Residence[];
    }>;
    findOne(id: string): Promise<{
        Data: import("./entities/residence.entity").Residence;
    }>;
    update(id: string, updateResidenceDto: UpdateDto): Promise<{
        Data: import("./entities/residence.entity").Residence;
    }>;
    remove(id: string): Promise<void>;
}
