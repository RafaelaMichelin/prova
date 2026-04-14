import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Estilos } from './estilos';
import { EstilosDto } from './estilos.dto/estilos.dto';

@Injectable()
export class EstilosService {
    constructor(
            @InjectModel(Estilos) private estilos: typeof Estilos,
        ){}
    
        //Inserção de novos registros
        create(estilosDto: EstilosDto) : Promise<Estilos| undefined>
        {
            return this.estilos.create({
                nome: estilosDto.nome,
            } as Estilos);
        }
    
        //Busca por ID
        findById(id:number)
        {
            return this.estilos.findOne({
                where:
                {
                    id
                }
            })
        }
    
        //Busca por Nome
        findByName(nome: string)
        {
            return this.estilos.findOne({
                where:
                {
                    nome
                }
            });
        }
    
        //Alteração dos registros a partir do ID
        update(estilosDto: EstilosDto)
        {
            return this.estilos.update({
                nome: estilosDto.nome,
    
            }, {
                where:
                {
                    id: estilosDto.id,
                }
            });
        }
    
        //Remoção dos Registros a partir do ID 
        delete(id:number)
        {
            return this.estilos.destroy({
                where:
                {
                    id
                }
            });
        }
}
