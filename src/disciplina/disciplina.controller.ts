import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  NotFoundException,
  HttpCode,
  ParseIntPipe
} from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';

@Controller('disciplinas')
export class DisciplinaController {
  constructor(private readonly disciplinaService: DisciplinaService) {}

  @Post()
  @HttpCode(201) // Recurso foi criado com sucesso.
  async create(@Body() createDisciplinaDto: CreateDisciplinaDto) {
    return this.disciplinaService.create(createDisciplinaDto);
  }

  @Get()
  @HttpCode(200) // O recurso foi carregado e transmitido no corpo da mensagem.
  findAll() {
    return this.disciplinaService.findAll();
  }

  @Get('id')
  @HttpCode(200) // O recurso foi encontrado e retornado com sucesso.
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const disciplina = await this.disciplinaService.findOne(id);
    if (!disciplina) {
      throw new NotFoundException(`Disciplina with ID ${id} not found`);
    }
    return disciplina;
  }

  @Patch('id')
  @HttpCode(200) // O recurso foi atualizado com sucesso e o recurso atualizado foi retornado.
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDisciplinaDto: UpdateDisciplinaDto,
  ) {
    const disciplina = await this.disciplinaService.findOne(id);
    if (!disciplina) {
      throw new NotFoundException(`Disciplina with ID ${id} not found`);
    }
    return this.disciplinaService.update(id, updateDisciplinaDto);
  }

  @Delete('id')
  @HttpCode(204) // O recurso foi excluído com sucesso.
  async remove(@Param('id', ParseIntPipe) id: number) {
    const disciplina = await this.disciplinaService.findOne(id);
    if (!disciplina) {
      throw new NotFoundException(`Disciplina with ID ${id} not found`);
    }
    return this.disciplinaService.remove(id);
  }
}
