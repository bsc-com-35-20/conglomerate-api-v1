import { ApiProperty } from '@nestjs/swagger';
import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Items{
    @PrimaryGeneratedColumn()
    @ApiProperty({example: '2'})
    item_id : number;

    @Column()
    @ApiProperty({example: 'Make-up'})
    item_name : string;

    @Column()
    @ApiProperty({example: 'Cosmetics'})
    item_type : string;
}