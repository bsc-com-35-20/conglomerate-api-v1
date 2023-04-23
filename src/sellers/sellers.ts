import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Sellers{
    @PrimaryGeneratedColumn()
    seller_id : number;

    @Column()
    First_Name : string;
    
    @Column()
    Last_Name : string;

    @Column()
    Email_address : string;

    @Column()
    Password : string;

    @Column()
    Type : string;
}