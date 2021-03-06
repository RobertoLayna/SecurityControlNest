import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVisitDto as CreateDto } from './dto/create-visit.dto';
import { UpdateVisitDto as UpdateDto } from './dto/update-visit.dto';
import { Visit } from './entities/visit.entity';
import { nanoid } from 'nanoid';

@Injectable()
export class VisitsService {
  constructor(
    @InjectRepository(Visit)
    private repository: Repository<Visit>,
  ) {}

  async create(createDto: CreateDto) {
    const qrIdentifier = nanoid(6);
    const register = await this.repository.create({
      ...createDto,
      ...{ visit_id: null, visit_identifier: qrIdentifier },
    });

    return await this.repository.save(register);
  }

  find(options): Promise<Visit[]> {
    return this.repository.find(options);
  }

  findAll(): Promise<Visit[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Visit> {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateDto: UpdateDto): Promise<Visit> {
    await this.repository.update(id, updateDto);
    return await this.repository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }
}
