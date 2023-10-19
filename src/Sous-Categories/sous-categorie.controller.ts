import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Query,
} from '@nestjs/common';
import { Sous_Categorie } from './sous-categorie.model';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SousCategoriesService } from './sous-categorie.service';
import { AuthGuard } from '../auth/aut.guard';

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
  @Post()
  createCategorie(@Body() sousCategorieData: Sous_Categorie): Promise<any> {
    return this.SousCategoriesService.createSousCategorie(sousCategorieData);
  }
}
