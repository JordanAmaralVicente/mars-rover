import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToOne,
    JoinColumn,
    OneToMany
} from "typeorm";
import { RoverMovement } from "./movement";
import { Plateau } from "./plateau";
import { RoverPosition } from "./position";

@Entity({ name: "rover" })
export class Rover {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToOne(() => RoverPosition)
    @JoinColumn()
    startPosition: RoverPosition;

    @OneToOne(() => RoverPosition)
    @JoinColumn()
    currentPosition: RoverPosition;

    @ManyToOne(() => Plateau, (plateau) => plateau.rovers)
    plateau: Plateau;

    @OneToMany(() => RoverMovement, (movement) => movement.rover)
    movements: RoverMovement[];
}
