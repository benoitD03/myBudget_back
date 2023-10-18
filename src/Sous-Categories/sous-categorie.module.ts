import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sous_Categorie } from './sous-categorie.model';
import { SousCategoriesService } from './sous-categorie.service';
import { SousCategoriesController } from './sous-categorie.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sous_Categorie])],
  controllers: [SousCategoriesController],
  providers: [SousCategoriesService],
  exports: [SousCategoriesService],
})
export class SousCategorieModule {}