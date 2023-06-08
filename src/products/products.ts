import { ApiProperty } from '@nestjs/swagger';
import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Products{
    @PrimaryGeneratedColumn()
    @ApiProperty({example: '1'})
    product_id : number;

    @Column()
    @ApiProperty({example: 'Lipgloss'})
    product_name : string;

    @Column()
    @ApiProperty({example: 'Chidziwitso manufacturers'})
    product_manufacturer : string;
    
    @Column()
    @ApiProperty({example: 'lipgloss_12'})
    product_model: string;
}