import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToOne,
    JoinColumn,
    OneToMany,
} from "typeorm";
import { RoverMovement } from "./movement";
import { Plateau } from "./plateau";
import { RoverPosition } from "./position";

@Entity({ name: "rover" })
export class Rover {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToOne(() => RoverPosition)
    @JoinColumn({ name: "start_position_fk" })
    startPosition: RoverPosition;

    @OneToOne(() => RoverPosition)
    @JoinColumn({ name: "current_position_fk" })
    currentPosition: RoverPosition;

    @ManyToOne(() => Plateau, (plateau) => plateau.rovers)
    @JoinColumn({ name: "plateau_fk" })
    plateau: Plateau;

    @OneToMany(() => RoverMovement, (movement) => movement.rover)
    movements?: RoverMovement[];
}
