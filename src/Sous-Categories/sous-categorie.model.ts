import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from '../Users/user.model';
import { Categorie } from '../Categories/categorie.model';

@Entity()
export class Sous_Categorie {
  @PrimaryGeneratedColumn()
  id_Sous_Categorie: number;

  @Column()
  Nom: string;

  @Column()
  Image: string;

  @Column()
  Depense: boolean;

  @Column()
  Date: Date;

  @Column()
  Somme: number;

  @Column()
  Couleur: string;

  @ManyToOne(() => User, (user) => user.sous_categorie)
  user: User;

  @ManyToOne(() => Categorie, (categorie) => categorie.sous_categorie)
  @JoinColumn({ name: 'categorieIdCategorie' })
  categorie: Categorie;
}
