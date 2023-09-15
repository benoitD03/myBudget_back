import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorie } from './categorie.model';
import { CategoriesService } from './categorie.service';
import { CategoriesController } from './categorie.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Categorie])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService],
})
export class CategorieModule {}
