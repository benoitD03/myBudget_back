import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { User } from '../Users/user.model';
import { Sous_Categorie } from '../Sous-Categories/sous-categorie.model';

@Entity()
export class Categorie {
  @PrimaryGeneratedColumn()
  id_Categorie: number;

  @Column()
  Nom: string;

  @Column()
  Image: string;

  @Column()
  Description: string;

  @Column()
  Depense: boolean;

  @Column()
  Revenu: boolean;

  @Column()
  Couleur: string;

  @ManyToOne(() => User, (user) => user.categorie)
  user: User;

  @OneToMany(() => Sous_Categorie, (sous_categorie) => sous_categorie.categorie)
  sous_categorie: Sous_Categorie[];
}
