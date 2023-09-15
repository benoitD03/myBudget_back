import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
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
  findAllByUserId(@Body() findAllCategoriesDto): Promise<Categorie[]> {
    return this.categoriesService.findAllByUserId(findAllCategoriesDto.user);
  }
}
