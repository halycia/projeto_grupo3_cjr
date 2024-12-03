import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create.avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update.avaliacao.dto';

@Controller('avaliacoes')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  async create(@Body(ValidationPipe) avaliacaoData: CreateAvaliacaoDto) {
    return await this.avaliacaoService.create(avaliacaoData);
  }

  @Get()
  async findAll() {
    return await this.avaliacaoService.findAll();
  }

  @Get('id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return await this.avaliacaoService.findById(id);
  }

  @Delete('id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.avaliacaoService.delete(id);
  }

  @Patch('id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) data: UpdateAvaliacaoDto,
  ) {
    return await this.avaliacaoService.update(id, data);
  }
}
