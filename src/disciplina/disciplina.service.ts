import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Disciplina } from './disciplina.entity';
import { PrismaService } from 'src/prisma-config/prisma.service';

@Injectable()
export class DisciplinaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(creteUserDto: CreateDisciplinaDto) {
    const disciplina = await this.prisma.disciplina.create({
      data: creteUserDto,
    });

    return disciplina;
  }
}
