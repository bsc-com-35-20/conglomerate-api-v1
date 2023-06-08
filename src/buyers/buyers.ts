import { ApiProperty } from '@nestjs/swagger';
import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Buyers{
    @PrimaryGeneratedColumn()
    @ApiProperty({example: '3'})
    buyer_id : number;

    @Column()
    @ApiProperty({example: 'Kelvin'})
    First_Name : string;
    
    @Column()
    @ApiProperty({example: 'Manana'})
    Last_Name : string;

    @Column()
    @ApiProperty({example: 'Kelz@gmail.com'})
    Email_address : string;

    @Column()
    @ApiProperty({example: 'kelz76hs5'})
    Password : string;

    
}