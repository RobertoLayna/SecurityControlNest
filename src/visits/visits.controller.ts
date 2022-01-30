import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { VisitsService as Service } from './visits.service';
import { CreateVisitDto as CreateDto } from './dto/create-visit.dto';
import { UpdateVisitDto as UpdateDto } from './dto/update-visit.dto';

@Controller('visits')
export class VisitsController {
  constructor(private readonly service: Service) {}

  @Post()
  async create(@Body() createDto: CreateDto) {
    const register = await this.service.create(createDto);
    const Data = await this.service.findOne(register.visit_id);

    return { Data };
  }

  @Get()
  async findAll() {
    const Data = (await this.service.findAll()) || [];

    return { Data };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const Data = (await this.service.findOne(+id)) || null;

    return { Data };
  }

  @Get('qr/:code')
  async findBy(@Param('code') code: string) {
    const Data = await this.service.find({
      where: { visit_identifier: code },
    });

    return { Data };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    const register = await this.service.update(+id, updateDto);
    const Data = await this.service.findOne(register.visit_id);

    return { Data };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
