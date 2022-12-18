import { Rover } from "../../databases/typeorm/entities";
import { RoverControllerType } from "../../databases/typeorm/repositories";
import { RoverAllowedMovements, RoverHeadingDirections } from "../../types";
import { ErrorObject } from "../../utils";
import { MountAndSaveRoverMovement } from "../movement/mount-and-save-movement";
import { MountAndSaveRoverPosition } from "../position/mount-and-rover-position";
import { moveRightMap } from "./types";

interface DI {
    roverController: RoverControllerType;
    mountAndSaveRoverPosition: MountAndSaveRoverPosition;
    mountAndSaveRoverMovement: MountAndSaveRoverMovement;
}

const createMoveRoverRight = ({
    roverController,
    mountAndSaveRoverPosition,
    mountAndSaveRoverMovement,
}: DI) =>
    async function moveRight(rover: Rover): Promise<Rover | ErrorObject> {
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

        await roverController.updateCurrentRoverPosition(rover.id, newPosition);

        rover.currentPosition = newPosition;
        return rover;
    };

export default createMoveRoverRight;
