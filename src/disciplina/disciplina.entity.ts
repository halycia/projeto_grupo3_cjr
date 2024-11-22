import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Professor } from '../professor/professor.entity'; // Importando Professor
import { Avaliacao } from '../avaliacao/avaliacao.entity'; // Importando Avaliacao

@Entity()
export class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Relacionamento Many-to-Many com Professor (Muitos Professores para Muitas Disciplinas)
  @ManyToMany(() => Professor)
  @JoinTable()
  professores: Professor[];

  // Relacionamento One-to-Many com Avaliacao (Uma Disciplina pode ter muitas Avaliações)
  @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.disciplina)
  avaliacao: Avaliacao[];

  @Column({ type: 'text', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'text',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
