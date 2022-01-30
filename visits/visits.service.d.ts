import { Repository } from 'typeorm';
import { CreateVisitDto as CreateDto } from './dto/create-visit.dto';
import { UpdateVisitDto as UpdateDto } from './dto/update-visit.dto';
import { Visit } from './entities/visit.entity';
export declare class VisitsService {
    private repository;
    constructor(repository: Repository<Visit>);
    create(createDto: CreateDto): Promise<Visit>;
    find(options: any): Promise<Visit[]>;
    findAll(): Promise<Visit[]>;
    findOne(id: number): Promise<Visit>;
    update(id: number, updateDto: UpdateDto): Promise<Visit>;
    remove(id: number): Promise<void>;
}
