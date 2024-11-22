import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Professor } from '../professor/entities/professor.entity';
import { Disciplina } from '../disciplina/disciplina.entity';
import { Comentarios } from '../comentarios/comentarios.entity'; // Importando Comentarios
import { forwardRef } from '@nestjs/common';

@Entity()
export class Avaliacao {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.avaliacao)
  @JoinColumn({ name: 'usuarioId' })
  usuario: User;

  @Column()
  usuarioId: number;

  @ManyToOne(() => Professor, (professor) => professor.avaliacao)
  @JoinColumn({ name: 'professorId' })
  professor: Professor;

  @Column()
  professorId: number;

  @ManyToOne(() => Disciplina, (disciplina) => disciplina.avaliacao)
  @JoinColumn({ name: 'disciplinaId' })
  disciplina: Disciplina;

  @Column()
  disciplinaId: number;

  @Column()
  conteudo: string;

  @Column({ type: 'text', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'text',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  // Adicionando o relacionamento One-to-Many com Comentarios
  @OneToMany(() => Comentarios, (comentarios) => comentarios.avaliacao)
  comentarios: Comentarios[];
}
