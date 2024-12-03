import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Disciplina } from '../disciplina/entities/disciplina.entity'; // Importando Disciplina
import { Avaliacao } from '../avaliacao/avaliacao.entity'; // Importando Avaliacao

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  department: string;

  // Relacionamento Many-to-Many com Disciplina (Muitos Professores para Muitas Disciplinas)
  @ManyToMany(() => Disciplina)
  disciplinas: Disciplina[];

  // Relacionamento One-to-Many com Avaliacao (Um Professor pode ser avaliado várias vezes)
  @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.professor)
  avaliacao: Avaliacao[];

  @Column({ type: 'text', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({
    type: 'text',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: string;
}
