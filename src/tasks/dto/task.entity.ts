import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "../task-status.enum";

// Repository pattern
@Entity()//thực thể
export class Task extends BaseEntity{
    @PrimaryGeneratedColumn('uuid') //primary key
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
}
