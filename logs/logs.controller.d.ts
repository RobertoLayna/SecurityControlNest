import { LogsService as Service } from './logs.service';
import { CreateLogDto as CreateDto } from './dto/create-log.dto';
import { UpdateLogDto as UpdateDto } from './dto/update-log.dto';
export declare class LogsController {
    private readonly service;
    constructor(service: Service);
    create(createResidenceDto: CreateDto): Promise<{
        Data: import("./entities/log.entity").Log;
    }>;
    findAll(): Promise<{
        Data: import("./entities/log.entity").Log[];
    }>;
    findOne(id: string): Promise<{
        Data: import("./entities/log.entity").Log;
    }>;
    update(id: string, updateResidenceDto: UpdateDto): Promise<{
        Data: import("./entities/log.entity").Log;
    }>;
    remove(id: string): Promise<void>;
}
