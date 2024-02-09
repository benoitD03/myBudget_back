import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Users/user.model';
import { Categorie } from './Categories/categorie.model';
import { Sous_Categorie } from './Sous-Categories/sous-categorie.model';
// import { Config } from './Config/config';
import { UserModule } from './Users/user.module';
import { AuthModule } from './auth/auth.module';
import { CategorieModule } from './Categories/categorie.module';
import { SousCategorieModule } from './Sous-Categories/sous-categorie.module';
import { ConfigModule } from '@nestjs/config';
import * as process from "process";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
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
