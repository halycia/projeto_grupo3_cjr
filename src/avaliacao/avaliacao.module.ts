import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvaliacaoService } from './avaliacao.service';
import { AvaliacaoController } from './avaliacao.controller';
import { Avaliacao } from './avaliacao.entity';
import { User } from '../user/entities/user.entity';
import { Professor } from '../professor/professor.entity';
import { Disciplina } from '../disciplina/entities/disciplina.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Avaliacao, User, Professor, Disciplina])],
  controllers: [AvaliacaoController],
  providers: [AvaliacaoService],
})
export class AvaliacaoModule {}
