import { Repository } from 'typeorm';
import { CreateResidenceDto as CreateDto } from './dto/create-residence.dto';
import { UpdateResidenceDto as UpdateDto } from './dto/update-residence.dto';
import { Residence } from './entities/residence.entity';
export declare class ResidencesService {
    private repository;
    constructor(repository: Repository<Residence>);
    create(createDto: CreateDto): Promise<Residence>;
    find(options: any): Promise<Residence[]>;
    findAll(): Promise<Residence[]>;
    findOne(id: number): Promise<Residence>;
    update(id: number, updateDto: UpdateDto): Promise<Residence>;
    remove(id: number): Promise<void>;
}
