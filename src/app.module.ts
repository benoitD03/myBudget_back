import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Users/user.model';
import { Categorie } from './Categories/categorie.model';
import { Sous_Categorie } from './Sous-Categories/sous-categorie.model';
import { Config } from './Config/config';
import { UserModule } from './Users/user.module';
import { AuthModule } from './auth/auth.module';
import { CategorieModule } from './Categories/categorie.module';
import { SousCategorieModule } from './Sous-Categories/sous-categorie.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: Config.DB_HOST,
      port: Config.DB_PORT,
      username: Config.DB_USER,
      password: Config.DB_PASSWORD,
      database: Config.DB_NAME,
      entities: [User, Categorie, Sous_Categorie],
      synchronize: true, // Utilisez "false" en production
    }),
    UserModule,
    AuthModule,
    CategorieModule,
    SousCategorieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
