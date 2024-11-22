import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';
import { Comentarios } from './comentarios.entity';
import { User } from '../user/user.entity';
import { Avaliacao } from '../avaliacao/avaliacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comentarios, User, Avaliacao])],
  controllers: [ComentariosController],
  providers: [ComentariosService],
})
export class ComentariosModule {}
