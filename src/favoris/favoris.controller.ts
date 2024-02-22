import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { FavorisService } from './favoris.service';
import { AuthGuard } from '../auth/aut.guard';
import { Favoris } from './favoris.model';

@Controller('favoris')
export class FavorisController {
  constructor(private readonly FavorisService: FavorisService) {}

  //GET /favoris/all
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('all')
  findAllByUserId(@Query() query): Promise<Favoris[]> {
    return this.FavorisService.findAllByUserId(query);
  }

  //POST /favoris
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Post()
  createFavori(@Body() favoriData: Favoris): Promise<any> {
    return this.FavorisService.createFavori(favoriData);
  }

  //DELETE /favoris/:id
  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteFavori(@Param('id') favoriId: number) {
    await this.FavorisService.deleteFavori(favoriId);
    return { message: 'Favori supprimée avec succès !' };
  }

  //PUT /favoris/:id
  @Put(':id')
  async updateFavori(
    @Param('id') favoriId: number,
    @Body() updatedFavoriData: Favoris,
  ): Promise<Favoris> {
    return this.FavorisService.updateFavori(favoriId, updatedFavoriData);
  }
}
