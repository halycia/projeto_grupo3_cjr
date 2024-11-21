import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Avaliacao } from '../avaliacao/avaliacao.entity'; // Importando Avaliacao

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  department: string;

  @Column()
  course: string;

  @Column({ nullable: true })
  photoUrl: string; // Foto de perfil

  // Relacionamento One-to-Many com Avaliacao
  @OneToMany(() => Avaliacao, avaliacao => avaliacao.usuario)
  avaliacao: Avaliacao[];
}
