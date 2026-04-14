import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
@Table
export class Estilos extends Model<Estilos> {

    @PrimaryKey
    @AutoIncrement
    @Column({
       type: DataType.TINYINT
    })
     declare id:number;

     @Column({
        type: DataType.STRING
     })
     nome!:string;  


}