import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module'
import { UserModule } from './user/user.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { ProfessorModule } from './professor/professor.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { ComentariosModule } from './comentarios/comentarios.module';

@Module({
  imports: [
    PrismaModule,
    AvaliacaoModule,
    ComentariosModule,
    DisciplinaModule,
    ProfessorModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
