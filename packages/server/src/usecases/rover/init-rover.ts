import { PlateauControllerType } from "../../databases/typeorm/repositories";
import { MountAndSaveRoverPosition } from "../../services/position/mount-and-rover-position";
import { MountAndSaveRover } from "../../services/rover/mount-and-save-rover";
import { RoverHeadingDirections } from "../../types/rover";
import { isRoverOutOfBound } from "../../utils";
import { mountErrorObject } from "../../utils/error-object";

interface DI {
    plateauController: PlateauControllerType;
    mountAndSaveRoverPosition: MountAndSaveRoverPosition;
    mountAndSaveRover: MountAndSaveRover;
}

const createInitRover =
    ({ plateauController, mountAndSaveRoverPosition, mountAndSaveRover }: DI) =>
    async (
        plateauId: string,
        posX: number,
        posY: number,
        head: RoverHeadingDirections,
    ): Promise<any> => {
        if (posX < 0 || posY < 0) {
            return mountErrorObject("x and y should be valid");
        }

        const plateau = await plateauController.findById(plateauId);
        if (!plateau) {
            return mountErrorObject("Plateau doesn't exist!");
        }

        const roverPosition = await mountAndSaveRoverPosition(posX, posY, head);

        const isRoverOutOfBounOnX = isRoverOutOfBound(
            roverPosition,
            "xCoordinate",
            plateau,
        );
        const isRoverOutOfBounOnY = isRoverOutOfBound(
            roverPosition,
            "yCoordinate",
            plateau,
        );
        if (isRoverOutOfBounOnX || isRoverOutOfBounOnY) {
            return mountErrorObject(
                "The Rover Landind position is out of bound",
            );
        }

        const newRover = await mountAndSaveRover(
            roverPosition,
            roverPosition,
            plateau,
        );

        return newRover;
    };

export default createInitRover;
