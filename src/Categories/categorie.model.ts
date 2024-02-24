import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { User } from '../Users/user.model';
import { Sous_Categorie } from '../Sous-Categories/sous-categorie.model';
import { Favoris } from '../favoris/favoris.model';

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
  Couleur: string;

  @ManyToOne(() => User, (user) => user.categorie)
  user: User;

  @OneToMany(
    () => Sous_Categorie,
    (sous_categorie) => sous_categorie.categorie,
    { onDelete: 'CASCADE' },
  )
  sous_categorie: Sous_Categorie[];

  @OneToMany(
    () => Favoris,
    (favoris) => favoris.categorie,
    { onDelete: 'CASCADE' },
  )
  favoris: Favoris[];
}
