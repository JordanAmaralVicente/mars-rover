import {
    PlateauControllerType,
    RoverControllerType,
} from "../../databases/typeorm/repositories";
import { mountAndSaveRoverPosition } from "../../services/position/mount-and-rover-position";
import { mountAndSaveRover } from "../../services/rover/mount-and-save-rover";
import {
    RoverAllowedMovements,
    RoverHeadingDirections,
} from "../../types/rover";
import { mountErrorObject } from "../../utils/error-object";
import {
    MoveRoverFunctionType,
    moveForward,
    moveLeft,
    moveRight,
} from "./move-rover";

const movementsMap = new Map<RoverAllowedMovements, MoveRoverFunctionType>([
    [RoverAllowedMovements.LEFT, moveLeft],
    [RoverAllowedMovements.RIGHT, moveRight],
    [RoverAllowedMovements.MOVE_FORWARD, moveForward],
]);

interface DI {
    roverController: RoverControllerType;
    plateauController: PlateauControllerType;
}

const createInitAndMoveRover =
    ({ roverController, plateauController }: DI) =>
    async (
        plateauId: string,
        posX: number,
        posY: number,
        head: RoverHeadingDirections,
        movements: string,
    ): Promise<any> => {
        if (posX < 0 || posY < 0) {
            return mountErrorObject("posX and posY should be valid");
        }

        const plateau = await plateauController.findById(plateauId);
        if (!plateau) {
            return mountErrorObject("Plateau doesn't exist!");
        }

        // TODO: move it to a new function
        const roverPosition = await mountAndSaveRoverPosition(posX, posY, head);
        const newRover = await mountAndSaveRover(
            roverPosition,
            roverPosition,
            plateau,
        );

        const parsedMovements = movements.split("");

        for (const movement of parsedMovements) {
            const parsedMovement = movement as RoverAllowedMovements;
            const mappedMovementFunction = movementsMap.get(parsedMovement);

            if (!mappedMovementFunction) {
                return mountErrorObject("Invalid rover movement!");
            }

            const result = await mappedMovementFunction(newRover, plateau);

            if (result?.error) {
                return result;
            }
        }

        return roverController.findById(newRover.id);
    };

export default createInitAndMoveRover;
