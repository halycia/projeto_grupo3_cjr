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
  ParseIntPipe,
} from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { CreateComentariosDto } from './dto/create-comentarios.dto';
import { UpdateComentariosDto } from './dto/update-comentarios.dto';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Post()
  @HttpCode(201) // Recurso criado com sucesso.
  async create(@Body() createComentariosDto: CreateComentariosDto) {
    return this.comentariosService.create(createComentariosDto);
  }

  @Get()
  @HttpCode(200) // Recurso carregado com sucesso.
  async findAll() {
    return this.comentariosService.findAll();
  }

  @Get('id')
  @HttpCode(200) // Recurso encontrado com sucesso.
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const comentario = await this.comentariosService.findOne(id);
    if (!comentario) {
      // Lança erro 404 se o comentário não for encontrado.
      throw new NotFoundException(`Comentário com ID ${id} não encontrado.`);
    }
    return comentario;
  }

  @Patch('id')
  @HttpCode(200) // Recurso atualizado com sucesso.
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateComentariosDto: UpdateComentariosDto) {
    const comentario = await this.comentariosService.findOne(id);
    if (!comentario) {
      // Lança erro 404 se o comentário não for encontrado.
      throw new NotFoundException(`Comentário com ID ${id} não encontrado para atualização.`);
    }
    return this.comentariosService.update(id, updateComentariosDto);
  }

  @Delete('id')
  @HttpCode(204) // Recurso excluído com sucesso.
  async remove(@Param('id', ParseIntPipe) id: number) {
    const comentario = await this.comentariosService.findOne(id);
    if (!comentario) {
      // Lança erro 404 se o comentário não for encontrado.
      throw new NotFoundException(`Comentário com ID ${id} não encontrado para exclusão.`);
    }
    return this.comentariosService.remove(id);
  }
}
