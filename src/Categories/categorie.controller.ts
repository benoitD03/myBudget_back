import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Query, Delete
} from "@nestjs/common";
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
}
