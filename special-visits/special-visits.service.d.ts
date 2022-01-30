import { Repository } from 'typeorm';
import { CreateSpecialVisitDto as CreateDto } from './dto/create-special-visit.dto';
import { UpdateSpecialVisitDto as UpdateDto } from './dto/update-special-visit.dto';
import { SpecialVisit } from './entities/special-visit.entity';
export declare class SpecialVisitsService {
    private repository;
    constructor(repository: Repository<SpecialVisit>);
    create(createDto: CreateDto): Promise<SpecialVisit>;
    find(options: any): Promise<SpecialVisit[]>;
    findAll(): Promise<SpecialVisit[]>;
    findOne(id: number): Promise<SpecialVisit>;
    update(id: number, updateDto: UpdateDto): Promise<SpecialVisit>;
    remove(id: number): Promise<void>;
}
