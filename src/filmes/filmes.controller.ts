import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { FilmesDto } from './filmes.dto/filmes.dto';
import { FilmesService } from './filmes.service';

@Controller('filmes')
export class FilmesController {

    constructor(
        private filmesService : FilmesService,
    ){}

    //Gerar Endpoints
    @Post('create_filmes')
    create(@Body() filmesDto: FilmesDto)
    {
        return this.filmesService.create(filmesDto);
    }

    //Busca pelo Id
    @Get('find_by_id')
    findById(@Query('id') id: number)
    {
        return this.filmesService.findById(id);
    }

    //Busca pelo nome
    @Get('find_by_name')
    findByName(@Query('nome') nome: string)
    {
        return this.filmesService.findByName(nome);
    }

    @Put('update_filme')
    update(@Body() filmesDto: FilmesDto )
    {
        return this.filmesService.update(filmesDto);
    }

    @Delete('delete_filme')
    delete(@Query('id') id: number)
    {
        return this.filmesService.delete(id);
    }
}
