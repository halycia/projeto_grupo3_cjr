import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';

@Controller('disciplinas')
export class DisciplinaController {
  constructor(private readonly disciplinaService: DisciplinaService) { }

  @Post()
  async create(@Body() CreateDisciplinaDto: CreateDisciplinaDto) {
    return this.disciplinaService.create(CreateDisciplinaDto);
  }

  @Get()
  findAll() {
    return this.disciplinaService.findAll();
  }

  @Get(':id')
  findOne(@Param(':id') id: string) {
    return this.disciplinaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param(':id') id: string, @Body() UpdateDisciplinaDto: UpdateDisciplinaDto) {
    return this.disciplinaService.update(+id, UpdateDisciplinaDto);
  }

  @Delete(':id')
  remove(@Param(':id') id: string) {
    return this.disciplinaService.remove(+id);
  }
}
