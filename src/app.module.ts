import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity'; // Sua entidade User
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // Configuração do banco de dados
    TypeOrmModule.forRoot({
      type: 'sqlite', // Ou outro tipo de banco de dados
      database: 'database.sqlite', // Nome do arquivo SQLite (ou outra configuração, se for PostgreSQL, MySQL, etc.)
      entities: [User], // Lista de entidades
      synchronize: true, // Cria as tabelas automaticamente (use com cautela em produção)
    }),
    TypeOrmModule.forFeature([User]),
    UserModule, // Registra a entidade para ser usada em serviços
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
