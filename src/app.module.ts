import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Users/user.model';
import { Categorie } from './Categories/categorie.model';
import { Sous_Categorie } from './Sous-Categories/sous-categorie.model';
import { Config } from './Config/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: Config.DB_HOST,
      port: Config.DB_PORT,
      username: Config.DB_USER,
      password: Config.DB_PASSWORD,
      database: Config.DB_NAME,
      // host: 'localhost',
      // port: 8889,
      // username: 'root',
      // password: 'root',
      // database: 'mybudget',
      entities: [User, Categorie, Sous_Categorie],
      synchronize: true, // Utilisez "false" en production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
