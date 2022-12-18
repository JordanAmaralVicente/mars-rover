import { RoverControllerType } from "../../databases/typeorm/repositories";
import { RoverAllowedMovements } from "../../types";
import { mountErrorObject, ErrorObject } from "../../utils";
import { MoveRoverFunctionType } from "../../services/rover";
import { Rover } from "../../databases/typeorm/entities";

interface DI {
    roverController: RoverControllerType;
    moveLeft: MoveRoverFunctionType;
    moveRight: MoveRoverFunctionType;
    moveForward: MoveRoverFunctionType;
}

const createMoveRover =
    ({ roverController, moveForward, moveLeft, moveRight }: DI) =>
    async (roverId: string, movements: string): Promise<any> => {
        const movementsMap = new Map<
            RoverAllowedMovements,
            MoveRoverFunctionType
        >([
            [RoverAllowedMovements.LEFT, moveLeft],
            [RoverAllowedMovements.RIGHT, moveRight],
            [RoverAllowedMovements.MOVE_FORWARD, moveForward],
        ]);

        let rover = await roverController.findById(roverId);
        if (!rover) {
            return mountErrorObject("Invalid rover id!");
        }

        const parsedMovements = movements.split("");

        for (const movement of parsedMovements) {
            const parsedMovement = movement as RoverAllowedMovements;
            const mappedMovementFunction = movementsMap.get(parsedMovement);

            if (!mappedMovementFunction) {
                return mountErrorObject("Invalid rover movement!");
            }

            const result = (await mappedMovementFunction(
                rover,
                rover.plateau,
            )) as Rover | ErrorObject;

            if (result instanceof Rover) {
                rover = result;
            } else {
                return result;
            }
        }

        return rover;
    };

export default createMoveRover;
