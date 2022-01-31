import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { LogsService as Service } from './logs.service';
import { CreateLogDto as CreateDto } from './dto/create-log.dto';
import { UpdateLogDto as UpdateDto } from './dto/update-log.dto';

@Controller('logs')
export class LogsController {
  constructor(private readonly service: Service) {}

  @Post()
  async create(@Body() createResidenceDto: CreateDto) {
    const register = await this.service.create(createResidenceDto);
    const Data = await this.service.findOne(register.log_id);

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

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateResidenceDto: UpdateDto) {
    const register = await this.service.update(+id, updateResidenceDto);
    const Data = await this.service.findOne(register.log_id);

    return { Data };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
