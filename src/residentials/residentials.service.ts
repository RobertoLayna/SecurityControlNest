import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResidentialDto as CreateDto } from './dto/create-residential.dto';
import { UpdateResidentialDto as UpdateDto } from './dto/update-residential.dto';
import { Residential } from './entities/residential.entity';

@Injectable()
export class ResidentialsService {
  constructor(
    @InjectRepository(Residential)
    private repository: Repository<Residential>,
  ) {}

  async create(createDto: CreateDto) {
    const register = await this.repository.create({
      ...createDto,
      ...{ residence_id: null },
    });

    return await this.repository.save(register);
  }

  find(options): Promise<Residential[]> {
    return this.repository.find(options);
  }

  findAll(): Promise<Residential[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Residential> {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateDto: UpdateDto): Promise<Residential> {
    await this.repository.update(id, updateDto);
    return await this.repository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }
}
