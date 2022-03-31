import { Exclude } from "class-transformer";
import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TestStatus } from "../test-status.enum";

@Entity()
export class Test extends BaseEntity {
    @PrimaryGeneratedColumn()//'uuid') //primary key
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TestStatus;

    @ManyToOne(_type => User, user => user.test, {eager: false})
    @Exclude({toPlainOnly: true})
    user: User;
}
