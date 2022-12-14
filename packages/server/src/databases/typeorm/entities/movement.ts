import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Rover } from "./rover";
import { RoverAllowedMovements } from "../../../types/rover";
import { RoverPosition } from "./position";

@Entity({ name: "movement" })
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
    @JoinColumn({ name: "start_position_fk" })
    startPosition: RoverPosition;

    @OneToOne(() => RoverPosition)
    @JoinColumn({ name: "final_position_fk" })
    finalPosition: RoverPosition;

    @ManyToOne(() => Rover, (rover) => rover.movements)
    @JoinColumn({ name: "rover_fk" })
    rover: Rover;
}
