import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Professor } from '../professor/professor.entity';
import { Disciplina } from '../disciplina/disciplina.entity';
import { Comentarios } from '../comentarios/comentarios.entity'; // Importando Comentarios

@Entity()
export class Avaliacao {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.avaliacao)
  @JoinColumn({ name: 'usuarioId' })
  usuario: User;

  @Column()
  usuarioId: number;

  @ManyToOne(() => Professor, professor => professor.avaliacao)
  @JoinColumn({ name: 'professorId' })
  professor: Professor;

  @Column()
  professorId: number;

  @ManyToOne(() => Disciplina, disciplina => disciplina.avaliacao)
  @JoinColumn({ name: 'disciplinaId' })
  disciplina: Disciplina;

  @Column()
  disciplinaId: number;

  @Column()
  conteudo: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  // Adicionando o relacionamento One-to-Many com Comentarios
  @OneToMany(() => Comentarios, comentarios => comentarios.avaliacao)
  comentarios: Comentarios[];
}
