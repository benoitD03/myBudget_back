import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { Categorie } from './categorie.model';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categorie)
    public categories: Repository<Categorie>,
  ) {}

  async findAllByUserId(userId: number): Promise<Categorie[] | undefined> {
    const options: FindManyOptions = {
      where: { user: userId },
    };
    const result = await this.categories.find(options);
    return result;
  }

  async createCategorie(categorieData: Categorie): Promise<any> {
    const categorie = this.categories.create(categorieData);
    return this.categories.save(categorie);
  }

  async deleteCategorie(categorieId: number): Promise<void> {
    const options: FindManyOptions = {
      where: { id_Categorie: categorieId },
    };
    const categorie = await this.categories.find(options);

    if (!categorie) {
      throw new NotFoundException(
        `Aucune categorie avec l'id ${categorieId} trouvée.`,
      );
    }
    await this.categories.delete(categorieId);
  }

  async updateCategorie(categorieId: number, updatedCategorieData: Categorie): Promise<Categorie> {

    const options: FindOneOptions = {
      where: { id_Categorie: categorieId },
    };

    const categorie = await this.categories.findOne(options);

    if (!categorie) {
      throw new NotFoundException(
        `Aucune categorie avec l'id ${categorieId} trouvée.`,
      );
    }

    Object.assign(categorie, updatedCategorieData);

    const updatedCategorie = await this.categories.save(categorie);
    return updatedCategorie;
  }
}
