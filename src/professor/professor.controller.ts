import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  HttpCode,
  ParseIntPipe
} from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';

@Controller('professores')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Post()
  @HttpCode(201) // Recurso foi criado com sucesso.
  create(@Body() createProfessorDto: CreateProfessorDto) {
    return this.professorService.create(createProfessorDto);
  }

  @Get()
  @HttpCode(200) // O recurso foi carregado e transmitido no corpo da mensagem.
  findAll() {
    return this.professorService.findAll();
  }

  @Get(':id')
  @HttpCode(200) // O recurso foi encontrado e retornado com sucesso.
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const professor = await this.professorService.findOne(id);
    if (!professor) {
      throw new NotFoundException(`Professor with ID ${id} not found`);
    }
    return professor;
  }

  @Patch(':id')
  @HttpCode(200) // O recurso foi atualizado com sucesso e o recurso atualizado foi retornado.
  async update(@Param('id', ParseIntPipe) id: number,
    @Body() updateProfessorDto: UpdateProfessorDto) {
    const professor = await this.professorService.findOne(id);
    if (!professor) {
      throw new NotFoundException(`Professor with ID ${id} not found`);
    }
    return await this.professorService.update(id, updateProfessorDto);
  }

  @Delete(':id')
  @HttpCode(204) // O recurso foi excluído com sucesso.
  async remove(@Param('id', ParseIntPipe) id: number) {
    const professor = await this.professorService.findOne(id);
    if (!professor) {
      throw new NotFoundException(`Professor with ID ${id} not found`);
    }
    await this.professorService.remove(id);
  }
}
