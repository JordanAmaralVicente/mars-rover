import { v4 as uuidv4 } from "uuid";
import { PlateauControllerType } from "../../databases/typeorm/repositories";
import {
    Plateau,
    Rover,
    RoverPosition,
} from "../../databases/typeorm/entities";
import { MountAndSaveRover } from "../../services/rover/mount-and-save-rover";
import { MounAndSaveRoverPosition } from "../../services/position/mount-and-rover-position";
import { RoverHeadingDirections } from "../../types";

export const PLATEAU_EXISTENT_ID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";

function createMockPlateauController() {
    const plateaus: Partial<Plateau>[] = [
        {
            id: PLATEAU_EXISTENT_ID,
            xCoordinate: 10,
            yCoordinate: 10,
        },
    ];

    return {
        save: async (plateau: Partial<Plateau>) => {
            return {
                id: uuidv4(),
                ...plateau,
            } as Plateau;
        },
        findById: async (id: string) => {
            return plateaus.find((plateau) =>
                plateau.id === id ? plateau : null,
            );
        },
    } as PlateauControllerType;
}
export const mockPlateauController = createMockPlateauController();

export const mockMountAndSaveRover: MountAndSaveRover = async function (
    startPosition: RoverPosition,
    currentPosition: RoverPosition,
    plateau: Plateau,
) {
    const rover = new Rover();

    rover.id = uuidv4();
    rover.currentPosition = currentPosition;
    rover.startPosition = startPosition;
    rover.plateau = plateau;

    return rover;
};

export const mockMountAndSaveRoverPosition: MounAndSaveRoverPosition =
    async function (posX: number, posY: number, head: RoverHeadingDirections) {
        const position = new RoverPosition();

        position.id = uuidv4();
        position.xCoordinate = posX;
        position.yCoordinate = posY;
        position.head = head;

        return position;
    };
