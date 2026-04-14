import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeConfigService } from './sequelize.config/sequelize.config.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Filmes } from './filmes/filmes';
import { Estilos } from './estilos/estilos';
import { FilmesController } from './filmes/filmes.controller';
import { FilmesService } from './filmes/filmes.service';
import { EstilosService } from './estilos/estilos.service';
import { EstilosController } from './estilos/estilos.controller';

@Module({
  imports: [
      ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService,
    }),
    SequelizeModule.forFeature([Filmes, Estilos]),    // Colocar todos os models 
  ],

  controllers: [AppController, FilmesController, EstilosController],
  providers: [AppService, SequelizeConfigService,FilmesService, EstilosService],
})
export class AppModule {}
