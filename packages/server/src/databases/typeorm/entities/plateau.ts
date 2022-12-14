import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Rover } from "./rover";

@Entity({ name: "plateau" })
export class Plateau {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "x_coord" })
    xCoordinate: number;

    @Column({ name: "y_coord" })
    yCoordinate: number;

    @OneToMany(() => Rover, (rover) => rover.plateau)
    rovers: Rover[];
}
