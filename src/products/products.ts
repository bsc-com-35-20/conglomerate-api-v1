import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Products{
    @PrimaryGeneratedColumn()
    product_id : number;

    @Column()
    product_name : string;

    @Column()
    product_manufacturer : string;
    
    @Column()
    product_model;
}