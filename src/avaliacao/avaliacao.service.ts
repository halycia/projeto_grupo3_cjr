import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateAvaliacaoDto } from './dto/create.avaliacao.dto';
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

  async findOne(id: number) {
    const avaliacao = await this.prisma.avaliacao.findUnique({ where: { id } });
    if (!avaliacao) throw new NotFoundException('Avaliação não encontrada');
    return avaliacao;
  }

  async update(id: number, data: UpdateAvaliacaoDto) {
    const avaliacao = await this.prisma.avaliacao.findUnique({ where: { id } });
    if (!avaliacao) throw new NotFoundException('Avaliação não encontrada');
    return await this.prisma.avaliacao.update({
      where: { id },
      data: data,
    });
  }

  async remove(id: number) {
    const avaliacao = await this.prisma.avaliacao.findUnique({ where: { id } });
    if (!avaliacao) throw new NotFoundException('Avaliação não encontrada');
    return await this.prisma.avaliacao.delete({
      where: { id },
    });
  }
}
