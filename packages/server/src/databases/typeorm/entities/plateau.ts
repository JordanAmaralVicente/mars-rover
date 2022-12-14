import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "plateau" })
export class Plateau {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "x_coord" })
    xCoordinate: number;

    @Column({ name: "y_coord"})
    yCoordinate: number;
}
