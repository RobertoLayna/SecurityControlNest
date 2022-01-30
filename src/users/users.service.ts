import { Injectable } from '@nestjs/common';
import { CreateUserDto as CreateDto } from './dto/create-user.dto';
import { UpdateUserDto as UpdateDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async create(createDto: CreateDto) {
    const register = await this.repository.create({
      ...createDto,
      ...{ user_id: null },
    });

    return await this.repository.save(register);
  }

  find(options): Promise<User[]> {
    return this.repository.find(options);
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateDto: UpdateDto): Promise<User> {
    await this.repository.update(id, updateDto);
    return await this.repository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }
}
