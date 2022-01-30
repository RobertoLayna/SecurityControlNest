import { CreateUserDto as CreateDto } from './dto/create-user.dto';
import { UpdateUserDto as UpdateDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private repository;
    constructor(repository: Repository<User>);
    create(createDto: CreateDto): Promise<User>;
    find(options: any): Promise<User[]>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateDto: UpdateDto): Promise<User>;
    remove(id: number): Promise<void>;
}
