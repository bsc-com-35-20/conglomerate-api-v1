import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Items{
    @PrimaryGeneratedColumn()
    item_id : number;

    @Column()
    item_name : string;

    @Column()
    item_type : string;
}