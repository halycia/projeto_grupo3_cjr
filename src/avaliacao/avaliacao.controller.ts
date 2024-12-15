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
  ValidationPipe,
} from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create.avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update.avaliacao.dto';
import { Public } from 'src/auth/decorators/isPublic.decorator';

@Controller('avaliacoes')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  @HttpCode(201) // Requisição foi bem-sucedida: um novo recurso foi criado.
  async create(@Body(ValidationPipe) avaliacaoData: CreateAvaliacaoDto) {
    return await this.avaliacaoService.create(avaliacaoData);
  }

  @Public()
  @Get()
  @HttpCode(200) // O recurso foi carregado e transmitido no corpo da mensagem.
  async findAll() {
    return await this.avaliacaoService.findAll();
  }

  @Get(':id')
  @HttpCode(200) // O recurso foi encontrado e retornado com sucesso.
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const avaliacao = await this.avaliacaoService.findOne(id);
    if (!avaliacao) {
      // Lança um erro 404: O recurso com o ID especificado não foi encontrado.
      throw new NotFoundException(
        `Get not possible. Avaliacao with ${id} not found`,
      );
    }
    return avaliacao;
  }

  @Patch(':id')
  @HttpCode(200) // O recurso foi atualizado com sucesso e o recurso atualizado foi retornado.
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) data: UpdateAvaliacaoDto,
  ) {
    const avaliacao = await this.avaliacaoService.findOne(id);
    if (!avaliacao) {
      throw new NotFoundException(
        `Patch not possible. Avaliacao with ${id} not found`,
      );
    }
    return await this.avaliacaoService.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204) // O recurso foi excluído com sucesso.
  async remove(@Param('id', ParseIntPipe) id: number) {
    const avaliacao = await this.avaliacaoService.findOne(id);
    if (!avaliacao) {
      throw new NotFoundException(
        `Delete not possible. Avaliacao with ${id} not found`,
      );
    }
    return await this.avaliacaoService.remove(id);
  }
}
