import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Query,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { Categorie } from './categorie.model';
import { CategoriesService } from './categorie.service';
import { AuthGuard } from '../auth/aut.guard';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('all')
  findAllByUserId(@Query() query): Promise<Categorie[]> {
    return this.categoriesService.findAllByUserId(query);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Post()
  createCategorie(@Body() categorieData: Categorie): Promise<any> {
    return this.categoriesService.createCategorie(categorieData);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteCategorie(@Param('id') CategorieId: number) {
    await this.categoriesService.deleteCategorie(CategorieId);
    return { message: 'Categorie supprimée avec succès !' };
  }

  @Put(':id')
  async updateCategorie(
    @Param('id') cartegorieId: number,
    @Body() updatedCategorieData: Categorie,
  ): Promise<Categorie> {
    return this.categoriesService.updateCategorie(
      cartegorieId,
      updatedCategorieData,
    );
  }
}
