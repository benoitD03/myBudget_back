import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Categorie } from '../Categories/categorie.model';
import { Sous_Categorie } from '../Sous-Categories/sous-categorie.model';
import { Favoris } from '../favoris/favoris.model';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_User: number;

  @Column()
  Nom: string;

  @Column()
  Prenom: string;

  @Column()
  Email: string;

  @Column()
  Password: string;

  @OneToMany(() => Categorie, (categorie) => categorie.user)
  categorie: Categorie[];

  @OneToMany(() => Sous_Categorie, (sous_categorie) => sous_categorie.user)
  sous_categorie: Sous_Categorie[];

  @OneToMany(() => Favoris, (favoris) => favoris.user)
  favoris: Favoris[];
}
