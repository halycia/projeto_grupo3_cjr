import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorService } from './professor.service';
import { ProfessorController } from './professor.controller';
import { Professor } from './professor.entity';
import { Disciplina } from '../disciplina/disciplina.entity';
import { Avaliacao } from '../avaliacao/avaliacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Professor, Disciplina, Avaliacao])],
  controllers: [ProfessorController],
  providers: [ProfessorService],
})
export class ProfessorModule {}
