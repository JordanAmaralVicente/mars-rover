import {
    RoverMovement,
    RoverPosition,
    Rover,
} from "../../databases/typeorm/entities";
import { RoverMovementController } from "../../databases/typeorm/repositories";
import { RoverAllowedMovements } from "../../types/rover";

export async function mountAndSaveRoverMovement(
    movementDone: RoverAllowedMovements,
    startPosition: RoverPosition,
    finalPosition: RoverPosition,
    rover: Rover,
): Promise<RoverMovement> {
    const movement = new RoverMovement();

    movement.movement = movementDone;
    movement.startPosition = startPosition;
    movement.finalPosition = finalPosition;
    movement.rover = rover;

    return RoverMovementController.save(movement);
}

export type MountAndSaveRoverMovement = typeof mountAndSaveRoverMovement;
