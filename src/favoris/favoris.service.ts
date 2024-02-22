import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, FindManyOptions, Repository } from "typeorm";
import { Favoris } from './favoris.model';
import { Sous_Categorie } from "../Sous-Categories/sous-categorie.model";
import { Categorie } from "../Categories/categorie.model";

@Injectable()
export class FavorisService {
  constructor(
    @InjectRepository(Favoris)
    public Favoris: Repository<Favoris>,
  ) {}

  /**
   * Méthode de récupération des favoris d'un utlisateur
   */
  async findAllByUserId(userId: number): Promise<Favoris[] | undefined> {
    const options: FindManyOptions = {
      where: { user: userId },
    };
    const result = await this.Favoris.find(options);
    return result;
  }

  /**
   * Méthode de création d'un favori
   */
  async createFavori(FavoriData: Favoris): Promise<any> {
    const favori = this.Favoris.create(FavoriData);
    return this.Favoris.save(favori);
  }
}
