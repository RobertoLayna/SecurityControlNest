import { Repository } from 'typeorm';
import { CreateGroupDto as CreateDto } from './dto/create-group.dto';
import { UpdateGroupDto as UpdateDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';
export declare class GroupsService {
    private repository;
    constructor(repository: Repository<Group>);
    create(createDto: CreateDto): Promise<Group>;
    find(options: any): Promise<Group[]>;
    findAll(): Promise<Group[]>;
    findOne(id: number): Promise<Group>;
    update(id: number, updateDto: UpdateDto): Promise<Group>;
    remove(id: number): Promise<void>;
}
