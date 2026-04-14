import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { EstilosService } from './estilos.service';
import { EstilosDto } from './estilos.dto/estilos.dto';

@Controller('estilos')
export class EstilosController {
    constructor(
            private estilosService : EstilosService,
        ){}
    
        //Gerar Endpoints
        @Post('create_estilo')
        create(@Body() estilosDto: EstilosDto)
        {
            return this.estilosService.create(estilosDto);
        }
    
        //Busca pelo Id
        @Get('find_by_id')
        findById(@Query('id') id: number)
        {
            return this.estilosService.findById(id);
        }
    
        //Busca pelo nome
        @Get('find_by_name')
        findByName(@Query('nome') nome: string)
        {
            return this.estilosService.findByName(nome);
        }
    
        @Put('update_estilo')
        update(@Body() estilosDto: EstilosDto )
        {
                return this.estilosService.update(estilosDto);
        } 
    
        @Delete('delete_estilo')
        delete(@Query('id') id: number)
        {
            return this.estilosService.delete(id);
        }
}
