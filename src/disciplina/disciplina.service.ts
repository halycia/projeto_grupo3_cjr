import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Disciplina } from './entities/disciplina.entity';
import { PrismaService } from 'src/prisma-config/prisma.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';

@Injectable()
export class DisciplinaService {
  constructor(
    @InjectRepository(Disciplina)
    private readonly disciplinaRepository: Repository<Disciplina>,
    private readonly prisma: PrismaService) { }

  async create(CreateDisciplinaDto) {
    const disciplina = await this.prisma.disciplina.create({
      data: {
        nome: CreateDisciplinaDto.nome,
      }
    });
    return disciplina;
  }

  async findAll() {
    return await this.prisma.disciplina.findMany();
  }

  async findOne(id: number) {
    const disciplina = await this.prisma.disciplina.findUnique({ where: { id } });

    if (disciplina) {
      return disciplina;
    } else {
      throw new NotFoundException('Disciplina inexistente');
    }
  }

  async update(id: number, updateDisciplinaDto: UpdateDisciplinaDto) {
    const disciplina = await this.prisma.disciplina.findUnique({ where: { id } });

    if (disciplina) {
      return await this.prisma.disciplina.update({
        where: { id },
        data: updateDisciplinaDto,
      });
    } else {
      throw new NotFoundException('Disciplina inexistente')
    }
  }

  async remove(id: number) {
    const existe = await this.prisma.disciplina.findUnique({ where: { id } });

    if (existe) {
      return await this.prisma.disciplina.delete({
        where: { id },
      });
    } else {
      throw new NotFoundException('Disciplina inexistente');
    }
  }
}
