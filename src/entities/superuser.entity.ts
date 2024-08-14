import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "superusers" })
export class SuperUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}