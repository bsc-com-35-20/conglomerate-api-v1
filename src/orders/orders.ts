import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Orders{
    @PrimaryGeneratedColumn()
    order_id : number;

    @Column()
    Order_name : string;

    @Column()
    order_date : Date;
}