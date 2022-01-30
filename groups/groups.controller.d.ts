import { GroupsService as Service } from './groups.service';
import { CreateGroupDto as CreateDto } from './dto/create-group.dto';
import { UpdateGroupDto as UpdateDto } from './dto/update-group.dto';
export declare class GroupsController {
    private readonly service;
    constructor(service: Service);
    create(createResidenceDto: CreateDto): Promise<{
        Data: import("./entities/group.entity").Group;
    }>;
    findAll(): Promise<{
        Data: import("./entities/group.entity").Group[];
    }>;
    findOne(id: string): Promise<{
        Data: import("./entities/group.entity").Group;
    }>;
    update(id: string, updateResidenceDto: UpdateDto): Promise<{
        Data: import("./entities/group.entity").Group;
    }>;
    remove(id: string): Promise<void>;
}
