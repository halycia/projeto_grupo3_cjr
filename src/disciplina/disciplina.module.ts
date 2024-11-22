import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisciplinaService } from './disciplina.service';
import { DisciplinaController } from './disciplina.controller';
import { Disciplina } from './disciplina.entity';
import { Professor } from '../professor/entities/professor.entity';
import { Avaliacao } from '../avaliacao/avaliacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Disciplina, Professor, Avaliacao])],
  controllers: [DisciplinaController],
  providers: [DisciplinaService],
})
export class DisciplinaModule {}
