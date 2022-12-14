import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { RoverHeadingDirections } from "../../../types/rover";

@Entity({ name: "rover_position" })
export class RoverPosition {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "x_coord" })
    xCoordinate: number;

    @Column({ name: "y_coord" })
    yCoordinate: number;

    @Column({
        name: "head",
        type: "enum",
        enum: RoverHeadingDirections,
    })
    head: string;
}
