import { Test } from "src/test/entities/test.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: string;
    @Column({unique: true})
    username: string;
    @Column()
    password: string;
    @OneToMany(_type => Test, test =>  test.user, {eager: true})
    test: Test[]
}