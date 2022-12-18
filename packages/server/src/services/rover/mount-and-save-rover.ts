import {
    Plateau,
    Rover,
    RoverPosition,
} from "../../databases/typeorm/entities";
import { RoverController } from "../../databases/typeorm/repositories";

export async function mountAndSaveRover(
    startPosition: RoverPosition,
    currentPosition: RoverPosition,
    plateau: Plateau,
): Promise<Rover> {
    const rover = new Rover();

    rover.startPosition = startPosition;
    rover.currentPosition = currentPosition;
    rover.plateau = plateau;

    return RoverController.save(rover);
}

export type MountAndSaveRover = typeof mountAndSaveRover;
