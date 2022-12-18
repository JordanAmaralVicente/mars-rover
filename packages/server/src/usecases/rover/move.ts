import { Rover, Plateau } from "../../databases/typeorm/entities";
import {
    RoverController,
    RoverControllerType,
} from "../../databases/typeorm/repositories";
import { mountAndSaveRoverMovement } from "../../services/movement/mount-and-save-movement";
import { mountAndSaveRoverPosition } from "../../services/position/mount-and-rover-position";
import { RoverAllowedMovements, RoverHeadingDirections } from "../../types";

import {
    moveLeftMap,
    moveRightMap,
    moveForwardMap,
    MoveForwardOptions,
    MoveRoverFunctionType,
} from "./types";
import { isRoverOutOfBound, mountErrorObject } from "../../utils";

async function moveLeft(rover: Rover) {
    const { currentPosition } = rover;

    const newHeadPosition = moveLeftMap[
        currentPosition.head
    ] as RoverHeadingDirections;

    const newPosition = await mountAndSaveRoverPosition(
        currentPosition.xCoordinate,
        currentPosition.yCoordinate,
        newHeadPosition,
    );

    await mountAndSaveRoverMovement(
        RoverAllowedMovements.LEFT,
        currentPosition,
        newPosition,
        rover,
    );

    await RoverController.updateCurrentRoverPosition(rover.id, newPosition);

    rover.currentPosition = newPosition;
    return rover;
}

async function moveRight(rover: Rover) {
    const { currentPosition } = rover;

    const newHeadPosition = moveRightMap[
        currentPosition.head
    ] as RoverHeadingDirections;

    const newPosition = await mountAndSaveRoverPosition(
        currentPosition.xCoordinate,
        currentPosition.yCoordinate,
        newHeadPosition,
    );

    await mountAndSaveRoverMovement(
        RoverAllowedMovements.RIGHT,
        currentPosition,
        newPosition,
        rover,
    );

    await RoverController.updateCurrentRoverPosition(rover.id, newPosition);

    rover.currentPosition = newPosition;
    return rover;
}

async function moveForward(rover: Rover, plateau: Plateau) {
    const { currentPosition } = rover;
    const unmountedNewPosition = { ...currentPosition };

    const { direction, norm } = moveForwardMap[
        currentPosition.head
    ] as MoveForwardOptions;

    unmountedNewPosition[direction] += norm;

    if (isRoverOutOfBound(unmountedNewPosition, direction, plateau)) {
        return mountErrorObject("new rover coordinate is out of bound");
    }

    const mountedNewPosition = await mountAndSaveRoverPosition(
        unmountedNewPosition.xCoordinate,
        unmountedNewPosition.yCoordinate,
        unmountedNewPosition.head,
    );

    await mountAndSaveRoverMovement(
        RoverAllowedMovements.MOVE_FORWARD,
        currentPosition,
        mountedNewPosition,
        rover,
    );

    await RoverController.updateCurrentRoverPosition(
        rover.id,
        mountedNewPosition,
    );

    rover.currentPosition = mountedNewPosition;
    return rover;
}

const movementsMap = new Map<RoverAllowedMovements, MoveRoverFunctionType>([
    [RoverAllowedMovements.LEFT, moveLeft],
    [RoverAllowedMovements.RIGHT, moveRight],
    [RoverAllowedMovements.MOVE_FORWARD, moveForward],
]);

interface DI {
    roverController: RoverControllerType;
}

const createMoveRover =
    ({ roverController }: DI) =>
    async (roverId: string, movements: string): Promise<any> => {
        const rover = await roverController.findById(roverId);
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

            const result = await mappedMovementFunction(rover, rover.plateau);

            if (result?.error) {
                return result;
            }
        }

        return roverController.findById(roverId);
    };

export default createMoveRover;
