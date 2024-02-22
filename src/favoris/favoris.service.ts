import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { Favoris } from './favoris.model';

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

  /**
   * Méthode de suppression d'un favori
   * @param favoriId
   */
  async deleteFavori(favoriId: number): Promise<void> {
    const options: FindManyOptions = {
      where: { id_Favori: favoriId },
    };
    const favori = await this.Favoris.find(options);

    if (!favori) {
      throw new NotFoundException(
        `Aucun favori avec l'id ${favoriId} trouvé.`,
      );
    }
    await this.Favoris.delete(favoriId);
  }

  /**
   * Méthode de mise à jour d'un favori
   * @param favoriId
   * @param updatedFavoriData
   */
  async updateFavori(favoriId: number, updatedFavoriData: Favoris): Promise<Favoris> {

    const options: FindOneOptions = {
      where: { id_Favori: favoriId },
    };

    const favori= await this.Favoris.findOne(options);

    if (!favori) {
      throw new NotFoundException(
        `Aucun favori avec l'id ${favoriId} trouvé.`,
      );
    }

    Object.assign(favori, updatedFavoriData);

    const updatedFavori = await this.Favoris.save(favori);
    return updatedFavori;
  }
}
