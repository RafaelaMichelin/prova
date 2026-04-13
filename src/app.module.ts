import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeConfigService } from './sequelize.config/sequelize.config.service';
import { FilmesController } from './filmes/filmes.controller';
import { FilmesService } from './filmes/filmes.service';
import { EstilosController } from './estilos/estilos.controller';
import { EstilosService } from './estilos/estilos.service';

@Module({
  imports: [],
  controllers: [AppController, FilmesController, EstilosController],
  providers: [AppService, SequelizeConfigService, FilmesService, EstilosService],
})
export class AppModule {}
