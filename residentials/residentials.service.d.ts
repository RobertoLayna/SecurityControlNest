import { Repository } from 'typeorm';
import { CreateResidentialDto as CreateDto } from './dto/create-residential.dto';
import { UpdateResidentialDto as UpdateDto } from './dto/update-residential.dto';
import { Residential } from './entities/residential.entity';
export declare class ResidentialsService {
    private repository;
    constructor(repository: Repository<Residential>);
    create(createDto: CreateDto): Promise<Residential>;
    find(options: any): Promise<Residential[]>;
    findAll(): Promise<Residential[]>;
    findOne(id: number): Promise<Residential>;
    update(id: number, updateDto: UpdateDto): Promise<Residential>;
    remove(id: number): Promise<void>;
}
