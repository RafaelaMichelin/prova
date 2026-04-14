import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilmesController } from './filmes.controller';
import { Filmes } from './filmes';
import { FilmesDto } from './filmes.dto/filmes.dto';

@Injectable()
export class FilmesService {
     constructor(
        @InjectModel(Filmes) private filmes: typeof Filmes,
    ){}

    //Inserção de novos registros
    create(filmesDto: FilmesDto) : Promise<Filmes | undefined>
    {
        return this.filmes.create({
            nome: filmesDto.nome,
            ano: filmesDto.ano,
            duracao: filmesDto.duracao,
            sinopse: filmesDto.sinopse,
        } as Filmes);
    }

    //Busca por ID
    findById(id:number)
    {
        return this.filmes.findOne({
            where:
            {
                id
            }
        })
    }

    //Busca por Nome
    findByName(nome: string)
    {
        return this.filmes.findOne({
            where:
            {
                nome
            }
        });
    }

    //Alteração dos registros a partir do ID
    update(filmesDto: FilmesDto)
    {
        return this.filmes.update({
            nome: filmesDto.nome,
            ano: filmesDto.ano,
            duracao: filmesDto.duracao,
            sinopse: filmesDto.sinopse,
        }, {
            where:
            {
                id: filmesDto.id,
            }
        });
    }

    //Remoção dos Registros a partir do ID 
    delete(id:number)
    {
        return this.filmes.destroy({
            where:
            {
                id
            }
        });
    }
}
