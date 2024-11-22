import { CreateAvaliacaoDto } from './dto/create.avaliacao.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma-config/prisma.service';
import { UpdateAvaliacaoDto } from './dto/update.avaliacao.dto';

@Injectable()
export class AvaliacaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAvaliacaoDto) {
    const avaliacao = await this.prisma.avaliacao.create({
      data,
    });
    return avaliacao;
  }

  async findAll() {
    return await this.prisma.avaliacao.findMany();
  }

  async findById(id: number) {
    const avaliacao = await this.prisma.avaliacao.findUnique({ where: { id } });
    if (!avaliacao) throw new NotFoundException('Avaliacao não encontrada');
    return avaliacao;
  }

  async update(id: number, data: UpdateAvaliacaoDto) {
    const avaliacao = await this.prisma.avaliacao.findUnique({ where: { id } });
    if (!avaliacao) throw new NotFoundException('Avaliacao não encontrada');
    return await this.prisma.avaliacao.update({
      where: { id },
      data: data,
    });
  }

  async delete(id: number) {
    const avaliacao = await this.prisma.avaliacao.findUnique({ where: { id } });
    if (!avaliacao) throw new NotFoundException('Avaliacao não encontrada');
    return avaliacao;
  }
}
