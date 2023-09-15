import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
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
}
