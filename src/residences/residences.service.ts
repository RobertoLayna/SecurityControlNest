import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResidenceDto as CreateDto } from './dto/create-residence.dto';
import { UpdateResidenceDto as UpdateDto } from './dto/update-residence.dto';
import { Residence } from './entities/residence.entity';

@Injectable()
export class ResidencesService {
  constructor(
    @InjectRepository(Residence)
    private repository: Repository<Residence>,
  ) {}

  async create(createDto: CreateDto) {
    const register = await this.repository.create({
      ...createDto,
      ...{ residence_id: null },
    });

    return await this.repository.save(register);
  }

  find(options): Promise<Residence[]> {
    return this.repository.find(options);
  }

  findAll(): Promise<Residence[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Residence> {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateDto: UpdateDto): Promise<Residence> {
    await this.repository.update(id, updateDto);
    return await this.repository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }
}
