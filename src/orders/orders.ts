import { ApiProperty } from '@nestjs/swagger';
import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Orders{
    @PrimaryGeneratedColumn()
    @ApiProperty({example: '1'})
    order_id : number;

    @Column()
    @ApiProperty({example: '8833456'})
    Order_name : string;

    @Column()
    @ApiProperty({example: '12/04/2024'})
    order_date : Date;
}