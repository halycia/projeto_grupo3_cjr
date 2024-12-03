import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { CreateComentariosDto } from './dto/create-comentarios.dto';
import { UpdateComentariosDto } from './dto/update-comentarios.dto';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Post()
  async create(@Body() createComentariosDto: CreateComentariosDto){
    return this.comentariosService.create(createComentariosDto);
  }

  @Get()
  findAll() {
    return this.comentariosService.findAll();
  }

  @Get(':id')
  findOne(@Param(':id') id: string) {
    return this.comentariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateComentariosDto: UpdateComentariosDto) {
    return this.comentariosService.update(+id, UpdateComentariosDto);
  }

  @Delete(':id')
  remove(@Param(':id') id: string) {
    return this.comentariosService.remove(+id);
  }
}
