import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService as Service } from './users.service';
import { CreateUserDto as CreateDto } from './dto/create-user.dto';
import { UpdateUserDto as UpdateDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly service: Service) {}

  @Post()
  async create(@Body() createResidenceDto: CreateDto) {
    const register = await this.service.create(createResidenceDto);
    const Data = await this.service.findOne(register.user_id);

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
    const Data = await this.service.findOne(register.user_id);

    return { Data };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
