import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupDto as CreateDto } from './dto/create-group.dto';
import { UpdateGroupDto as UpdateDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private repository: Repository<Group>,
  ) {}

  async create(createDto: CreateDto) {
    const register = await this.repository.create({
      ...createDto,
      ...{ residence_id: null },
    });

    return await this.repository.save(register);
  }

  find(options): Promise<Group[]> {
    return this.repository.find(options);
  }

  findAll(): Promise<Group[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Group> {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateDto: UpdateDto): Promise<Group> {
    await this.repository.update(id, updateDto);
    return await this.repository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }
}
