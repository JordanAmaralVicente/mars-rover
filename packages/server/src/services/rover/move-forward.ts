import { Plateau, Rover } from "../../databases/typeorm/entities";
import { RoverControllerType } from "../../databases/typeorm/repositories";
import { RoverAllowedMovements } from "../../types";
import { moveForwardMap, MoveForwardOptions } from "./types";
import { ErrorObject, isRoverOutOfBound, mountErrorObject } from "../../utils";
import { MountAndSaveRoverMovement } from "../movement/mount-and-save-movement";
import { MountAndSaveRoverPosition } from "../position/mount-and-rover-position";

interface DI {
    mountAndSaveRoverPosition: MountAndSaveRoverPosition;
    mountAndSaveRoverMovement: MountAndSaveRoverMovement;
    roverController: RoverControllerType;
}

const createMoveRoverForward = ({
    mountAndSaveRoverPosition,
    mountAndSaveRoverMovement,
    roverController,
}: DI) =>
    async function moveForward(
        rover: Rover,
        plateau: Plateau,
    ): Promise<Rover | ErrorObject> {
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

        await roverController.updateCurrentRoverPosition(
            rover.id,
            mountedNewPosition,
        );

        rover.currentPosition = mountedNewPosition;
        return rover;
    };

export default createMoveRoverForward;
