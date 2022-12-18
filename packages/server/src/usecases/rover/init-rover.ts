import { PlateauControllerType } from "../../databases/typeorm/repositories";
import { mountAndSaveRoverPosition } from "../../services/position/mount-and-rover-position";
import { mountAndSaveRover } from "../../services/rover/mount-and-save-rover";
import { RoverHeadingDirections } from "../../types/rover";
import { mountErrorObject } from "../../utils/error-object";

interface DI {
    plateauController: PlateauControllerType;
}

const createInitRover =
    ({ plateauController }: DI) =>
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
        const newRover = await mountAndSaveRover(
            roverPosition,
            roverPosition,
            plateau,
        );

        return newRover;
    };

export default createInitRover;
