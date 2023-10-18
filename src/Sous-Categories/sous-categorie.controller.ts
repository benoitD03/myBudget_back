import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { Sous_Categorie } from './sous-categorie.model';
import { SousCategoriesService } from './sous-categorie.service';
import { AuthGuard } from '../auth/aut.guard';

@Controller('sous-categories')
export class SousCategoriesController {
  constructor(private readonly SousCategoriesService: SousCategoriesService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('all')
  findAllByCategorieId(
    @Body() findAllSousCategoriesDto,
  ): Promise<Sous_Categorie[]> {
    return this.SousCategoriesService.findAllByCategorieId(
      findAllSousCategoriesDto.categorie,
    );
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Post()
  createCategorie(@Body() sousCategorieData: Sous_Categorie): Promise<any> {
    return this.SousCategoriesService.createSousCategorie(sousCategorieData);
  }
}
