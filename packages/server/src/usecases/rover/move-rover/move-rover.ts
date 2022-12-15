import {
    Rover,
    Plateau,
    RoverPosition,
} from "../../../databases/typeorm/entities";
import { RoverController } from "../../../databases/typeorm/repositories";
import { mountAndSaveRoverMovement } from "../../../services/movement/mount-and-save-movement";
import { mountAndSaveRoverPosition } from "../../../services/position/mount-and-rover-position";
import {
    RoverAllowedMovements,
    RoverHeadingDirections,
} from "../../../types/rover";
import { mountErrorObject } from "../../../utils/error-object";
import {
    moveLeftMap,
    moveRightMap,
    moveForwardMap,
    MoveForwardOptions,
    RoverDirection,
} from "./types";

export async function moveLeft(rover: Rover) {
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

export async function moveRight(rover: Rover) {
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

function isRoverOutOfBound(
    position: RoverPosition,
    direction: RoverDirection,
    plateau: Plateau,
): boolean {
    return position[direction] < 0 || position[direction] > plateau[direction];
}

export async function moveForward(rover: Rover, plateau: Plateau) {
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
