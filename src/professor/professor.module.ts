import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorService } from './professor.service';
import { ProfessorController } from './professor.controller';
import { Professor } from './entities/professor.entity';
import { Disciplina } from '../disciplina/entities/disciplina.entity';
import { Avaliacao } from '../avaliacao/avaliacao.entity';
import { PrismaModule } from '../prisma-config/prisma.module';

@Module({
  imports: [TypeOrmModule.forFeature([Professor, Disciplina, Avaliacao]), PrismaModule],
  controllers: [ProfessorController],
  providers: [ProfessorService],
})
export class ProfessorModule {}
