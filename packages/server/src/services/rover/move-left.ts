import { Rover } from "../../databases/typeorm/entities";
import { RoverControllerType } from "../../databases/typeorm/repositories";
import { RoverAllowedMovements, RoverHeadingDirections } from "../../types";
import { moveLeftMap } from "./types";
import { MountAndSaveRoverMovement } from "../movement/mount-and-save-movement";
import { MountAndSaveRoverPosition } from "../position/mount-and-rover-position";
import { ErrorObject } from "../../utils";

interface DI {
    roverController: RoverControllerType;
    mountAndSaveRoverPosition: MountAndSaveRoverPosition;
    mountAndSaveRoverMovement: MountAndSaveRoverMovement;
}

const createMoveRoverLeft = ({
    roverController,
    mountAndSaveRoverPosition,
    mountAndSaveRoverMovement,
}: DI) =>
    async function moveLeft(rover: Rover): Promise<Rover | ErrorObject> {
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

        await roverController.updateCurrentRoverPosition(rover.id, newPosition);

        rover.currentPosition = newPosition;
        return rover;
    };

export default createMoveRoverLeft;
