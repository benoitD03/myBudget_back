import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query, UseGuards } from "@nestjs/common";
import { FavorisService } from './favoris.service';
import { AuthGuard } from "../auth/aut.guard";
import { Categorie } from "../Categories/categorie.model";
import { Favoris } from "./favoris.model";
import { Sous_Categorie } from "../Sous-Categories/sous-categorie.model";

@Controller('favoris')
export class FavorisController {
  constructor(private readonly FavorisService: FavorisService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('all')
  findAllByUserId(@Query() query): Promise<Favoris[]> {
    return this.FavorisService.findAllByUserId(query);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Post()
  createFavori(@Body() favoriData: Favoris): Promise<any> {
    return this.FavorisService.createFavori(favoriData);
  }
}
