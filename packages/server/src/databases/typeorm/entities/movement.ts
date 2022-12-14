import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Rover } from "./rover";
import { RoverAllowedMovements } from "../../../types/rover";
import { RoverPosition } from "./position";

@Entity({ name: "rover_movent" })
export class RoverMovement {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        name: "movement",
        type: "enum",
        enum: RoverAllowedMovements,
    })
    movement: RoverAllowedMovements;

    @OneToOne(() => RoverPosition)
    @JoinColumn()
    startPosition: RoverPosition;

    @OneToOne(() => RoverPosition)
    @JoinColumn()
    finalPosition: RoverPosition;

    @ManyToOne(() => Rover, (rover) => rover.movements)
    rover: Rover;
}
