import { Repository } from 'typeorm';
import { CreateLogDto as CreateDto } from './dto/create-log.dto';
import { UpdateLogDto as UpdateDto } from './dto/update-log.dto';
import { Log } from './entities/log.entity';
export declare class LogsService {
    private repository;
    constructor(repository: Repository<Log>);
    create(createDto: CreateDto): Promise<Log>;
    find(options: any): Promise<Log[]>;
    findAll(): Promise<Log[]>;
    findOne(id: number): Promise<Log>;
    update(id: number, updateDto: UpdateDto): Promise<Log>;
    remove(id: number): Promise<void>;
}
