import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Sous_Categorie } from './sous-categorie.model';

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

  async createSousCategorie(sousCategorieData: Sous_Categorie): Promise<any> {
    const sousCategorie = this.Sous_Categories.create(sousCategorieData);
    return this.Sous_Categories.save(sousCategorie);
  }
}
