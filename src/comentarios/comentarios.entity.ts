import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity'; // Corrigido: agora está importando 'User'
import { Avaliacao } from '../avaliacao/avaliacao.entity'; // Importando Avaliacao

@Entity()
export class Comentarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  conteudo: string;

  // Relacionamento Many-to-One com User (antigo Usuario)
  @ManyToOne(() => User, user => user.avaliacao) // Alterado para 'User'
  usuario: User;

  // Relacionamento Many-to-One com Avaliacao
  @ManyToOne(() => Avaliacao, avaliacao => avaliacao.comentarios)
  avaliacao: Avaliacao;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
