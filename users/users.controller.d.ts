import { UsersService as Service } from './users.service';
import { CreateUserDto as CreateDto } from './dto/create-user.dto';
import { UpdateUserDto as UpdateDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly service;
    constructor(service: Service);
    create(createResidenceDto: CreateDto): Promise<{
        Data: import("./entities/user.entity").User;
    }>;
    findAll(): Promise<{
        Data: import("./entities/user.entity").User[];
    }>;
    findOne(id: string): Promise<{
        Data: import("./entities/user.entity").User;
    }>;
    update(id: string, updateResidenceDto: UpdateDto): Promise<{
        Data: import("./entities/user.entity").User;
    }>;
    remove(id: string): Promise<void>;
}
