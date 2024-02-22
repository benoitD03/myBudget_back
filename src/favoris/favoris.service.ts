import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favoris } from './favoris.model';

@Injectable()
export class FavorisService {
  constructor(
    @InjectRepository(Favoris)
    public Sous_Categories: Repository<Favoris>,
  ) {}
}
