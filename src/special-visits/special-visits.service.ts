import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSpecialVisitDto as CreateDto } from './dto/create-special-visit.dto';
import { UpdateSpecialVisitDto as UpdateDto } from './dto/update-special-visit.dto';
import { SpecialVisit } from './entities/special-visit.entity';

@Injectable()
export class SpecialVisitsService {
  constructor(
    @InjectRepository(SpecialVisit)
    private repository: Repository<SpecialVisit>,
  ) {}

  async create(createDto: CreateDto) {
    const register = await this.repository.create({
      ...createDto,
      ...{ special_visit_id: null },
    });

    return await this.repository.save(register);
  }

  find(options): Promise<SpecialVisit[]> {
    return this.repository.find(options);
  }

  findAll(): Promise<SpecialVisit[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<SpecialVisit> {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateDto: UpdateDto): Promise<SpecialVisit> {
    await this.repository.update(id, updateDto);
    return await this.repository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }
}
