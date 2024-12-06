import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module'
import { UserModule } from './user/user.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { ProfessorModule } from './professor/professor.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AvaliacaoModule,
    ProfessorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
