import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProfessorService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async create(createProfessorDto: CreateProfessorDto) {
    const professor = this.prisma.professor.create({
      data: createProfessorDto,
    });
    return professor;
  }

  async findAll() {
    return await this.prisma.professor.findMany();
  }

  async findOne(id: number) {
    const professor = await this.prisma.professor.findUnique({ where: { id } });

    if (professor) {
      return professor;
    } else {
      throw new NotFoundException('Usuário não cadastrado');
    }
  }

  async update(id: number, updateProfessorDto: UpdateProfessorDto) {
    const professor = await this.prisma.professor.findUnique({ where: { id } });

    if (professor) {
      return await this.prisma.usuario.update({
        where: { id },
        data: updateProfessorDto,
      });
    } else {
      throw new NotFoundException('Professor não cadastrado');
    }
  }

  async remove(id: number) {
    const existe = await this.prisma.professor.findUnique({ where: { id } });

    if (existe) {
      return await this.prisma.professor.delete({
        where: { id },
      });
    } else {
      throw new NotFoundException('Professor não cadastrado');
    }
  } 
}
