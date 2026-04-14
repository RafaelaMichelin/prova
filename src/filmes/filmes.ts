import { AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Filmes extends Model<Filmes> {


    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })declare id:number;

    
   //Foreign key
    @Column({
        type:DataType.STRING
    })
    estilo?:string;
   

    @Column({
        type: DataType.STRING
    })
    nome!:string;

    @Column({
        type: DataType.INTEGER
    })
    ano!:number;

    
    @Column({
        type: DataType.INTEGER
    })
    duracao!:number;

    @Column({
        type: DataType.STRING
    })
    foto?:string;

     @Column({
        type: DataType.STRING
    })
    video?:string;

    @Column({
        type: DataType.TEXT
    })
    sinopse?:string;


}
