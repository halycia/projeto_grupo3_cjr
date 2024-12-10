import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';

@Injectable()
export class DisciplinaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDisciplinaDto: CreateDisciplinaDto) {
    const disciplina = await this.prisma.disciplina.create({
      data: createDisciplinaDto,
    });
    return disciplina;
  }

  async findAll() {
    return await this.prisma.disciplina.findMany();
  }

  async findOne(id: number) {
    const disciplina = await this.prisma.disciplina.findUnique({ where: { id } });

    if (!disciplina) {
      throw new NotFoundException('Disciplina inexistente');
    }

    return disciplina;
  }

  async update(id: number, updateDisciplinaDto: UpdateDisciplinaDto) {
    const disciplina = await this.prisma.disciplina.findUnique({ where: { id } });

    if (!disciplina) {
      throw new NotFoundException('Disciplina inexistente');
    }

    return await this.prisma.disciplina.update({
      where: { id },
      data: updateDisciplinaDto,
    });
  }

  async remove(id: number) {
    const disciplina = await this.prisma.disciplina.findUnique({ where: { id } });

    if (!disciplina) {
      throw new NotFoundException('Disciplina inexistente');
    }

    return await this.prisma.disciplina.delete({ where: { id } });
  }
}
