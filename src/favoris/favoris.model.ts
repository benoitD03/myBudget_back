import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from '../Users/user.model';
import { Categorie } from '../Categories/categorie.model';

@Entity()
export class Favoris {
  @PrimaryGeneratedColumn()
  id_Favori: number;

  @Column()
  Nom: string;

  @Column()
  Depense: boolean;

  @Column()
  Somme: number;

  @ManyToOne(() => User, (user) => user.favoris)
  user: User;

  @ManyToOne(() => Categorie, (categorie) => categorie.favoris)
  @JoinColumn({ name: 'categorieIdCategorie' })
  categorie: Categorie;
}