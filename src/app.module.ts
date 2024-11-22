import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity'; // Sua entidade User
import { UserModule } from './user/user.module';
import { Avaliacao } from './avaliacao/avaliacao.entity';
import { Professor } from './professor/entities/professor.entity';
import { Disciplina } from './disciplina/disciplina.entity';
import { Comentarios } from './comentarios/comentarios.entity';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';

@Module({
  imports: [
    // Configuração do banco de dados
    TypeOrmModule.forRoot({
      type: 'sqlite', // Ou outro tipo de banco de dados
      database: 'database.sqlite', // Nome do arquivo SQLite (ou outra configuração, se for PostgreSQL, MySQL, etc.)
      entities: [User, Avaliacao, Professor, Disciplina, Comentarios], // Lista de entidades
      synchronize: true, // Cria as tabelas automaticamente (use com cautela em produção)
    }),
    TypeOrmModule.forFeature([User]),
    UserModule, // Registra a entidade para ser usada em serviços
    AvaliacaoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
