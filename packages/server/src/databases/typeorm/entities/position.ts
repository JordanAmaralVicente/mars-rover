import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { RoverHeadingDirections } from "../../../types/rover";

@Entity({ name: "position" })
export class RoverPosition {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "x_coord" })
    xCoordinate: number;

    @Column({ name: "y_coord" })
    yCoordinate: number;

    @Column({
        type: "enum",
        enum: RoverHeadingDirections,
    })
    head: string;
}
