import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Between, FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { Sous_Categorie } from './sous-categorie.model';
import { Categorie } from "../Categories/categorie.model";

@Injectable()
export class SousCategoriesService {
  constructor(
    @InjectRepository(Sous_Categorie)
    public Sous_Categories: Repository<Sous_Categorie>,
  ) {}

  async findAllByCategorieId(categorieId: number): Promise<Sous_Categorie[] | undefined> {
    const options: FindManyOptions = {
      where: { categorie: categorieId },
    };
    const result = await this.Sous_Categories.find(options);
    return result;
  }

  async findAllByCategorieIdAndMonth(categorieId: number, year: number, month: number): Promise<Sous_Categorie[] | undefined> {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    const options = {
      where: { categorie: { id_Categorie: categorieId }, Date: Between(startDate, endDate) },
    };

    return this.Sous_Categories.find(options);
  }

  async createSousCategorie(sousCategorieData: Sous_Categorie): Promise<any> {
    const sousCategorie = this.Sous_Categories.create(sousCategorieData);
    return this.Sous_Categories.save(sousCategorie);
  }

  async deleteSousCategorie(sousCategorieId: number): Promise<void> {
    const options: FindManyOptions = {
      where: { id_Sous_Categorie: sousCategorieId },
    };
    const sousCategorie = await this.Sous_Categories.find(options);

    if (!sousCategorie) {
      throw new NotFoundException(
        `Aucune Sous-categorie avec l'id ${sousCategorieId} trouvée.`,
      );
    }
    await this.Sous_Categories.delete(sousCategorieId);
  }

  async updateSousCategorie(sousCategorieId: number, updatedSousCategorieData: Sous_Categorie): Promise<Sous_Categorie> {

    const options: FindOneOptions = {
      where: { id_Sous_Categorie: sousCategorieId },
    };

    const sousCategorie = await this.Sous_Categories.findOne(options);

    if (!sousCategorie) {
      throw new NotFoundException(
        `Aucune categorie avec l'id ${sousCategorieId} trouvée.`,
      );
    }

    Object.assign(sousCategorie, updatedSousCategorieData);

    const updatedSousCategorie = await this.Sous_Categories.save(sousCategorie);
    return updatedSousCategorie;
  }
}
