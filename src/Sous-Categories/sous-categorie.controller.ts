import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Query, Delete, Param, Put
} from "@nestjs/common";
import { Sous_Categorie } from './sous-categorie.model';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SousCategoriesService } from './sous-categorie.service';
import { AuthGuard } from '../auth/aut.guard';
import { Categorie } from "../Categories/categorie.model";

@Controller('sous-categories')
export class SousCategoriesController {
  constructor(private readonly SousCategoriesService: SousCategoriesService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('all')
  findAllByUserId(@Query() query): Promise<Sous_Categorie[] | undefined> {
    return this.SousCategoriesService.findAllByCategorieId(query);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('by-month')
  async findAllByCategoryAndMonth(@Query() query): Promise<Sous_Categorie[] | undefined> {
    const { categorieId, year, month } = query;
    return this.SousCategoriesService.findAllByCategorieIdAndMonth(
      categorieId,
      year,
      month,
    );
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('by-year')
  async findAllByCategoryAndYear(@Query() query): Promise<Sous_Categorie[] | undefined> {
    const { categorieId, year } = query;
    return this.SousCategoriesService.findAllByCategorieIdAndYear(
      categorieId,
      year,
    );
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Post()
  createCategorie(@Body() sousCategorieData: Sous_Categorie): Promise<any> {
    return this.SousCategoriesService.createSousCategorie(sousCategorieData);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteSousCategorie(@Param('id') sousCategorieId: number) {
    await this.SousCategoriesService.deleteSousCategorie(sousCategorieId);
    return { message: 'Sous-categorie supprimée avec succès !' };
  }

  @Put(':id')
  async updateSousCategorie(
    @Param('id') sousCartegorieId: number,
    @Body() updatedSousCategorieData: Sous_Categorie,
  ): Promise<Sous_Categorie> {
    return this.SousCategoriesService.updateSousCategorie(
      sousCartegorieId,
      updatedSousCategorieData,
    );
  }
}
