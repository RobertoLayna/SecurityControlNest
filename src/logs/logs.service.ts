import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLogDto as CreateDto } from './dto/create-log.dto';
import { UpdateLogDto as UpdateDto } from './dto/update-log.dto';
import { Log } from './entities/log.entity';


@Injectable()
export class LogsService {
  constructor(
    @InjectRepository(Log)
    private repository: Repository<Log>,
  ) {}

  async create(createDto: CreateDto) {
    const register = await this.repository.create({
      ...createDto,
      ...{ log_id: null },
    });

    return await this.repository.save(register);
  }

  find(options): Promise<Log[]> {
    return this.repository.find(options);
  }

  findAll(): Promise<Log[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Log> {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateDto: UpdateDto): Promise<Log> {
    await this.repository.update(id, updateDto);
    return await this.repository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }
}
