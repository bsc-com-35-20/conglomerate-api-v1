import { ApiProperty } from '@nestjs/swagger';
import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Sellers{
    @PrimaryGeneratedColumn()
    @ApiProperty({example: '1'})
    seller_id : number;

    @Column()
    @ApiProperty({example: 'Chisomo'})
    First_Name : string;
    
    @Column()
    @ApiProperty({example: 'Banda'})
    Last_Name : string;

    @Column()
    @ApiProperty({example: 'chisoBanda@gmail.com'})
    Email_address : string;

    @Column()
    @ApiProperty({example: 'Chisomo0764'})
    Password : string;

    @Column()
    @ApiProperty({example: 'Electronic'})
    Type : string;
}