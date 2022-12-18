import { v4 as uuidv4 } from "uuid";
import {
    PlateauControllerType,
    RoverControllerType,
} from "../../databases/typeorm/repositories";
import {
    Plateau,
    Rover,
    RoverMovement,
    RoverPosition,
} from "../../databases/typeorm/entities";
import { MountAndSaveRover } from "../../services/rover/mount-and-save-rover";
import { MountAndSaveRoverPosition } from "../../services/position/mount-and-rover-position";
import { RoverAllowedMovements, RoverHeadingDirections } from "../../types";
import { MountAndSaveRoverMovement } from "../../services/movement/mount-and-save-movement";

export const PLATEAU_EXISTENT_ID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
export const ROVER_EXISTENT_ID = "a12bc2b8-fec3-45e0-9285-d28577c5f703";

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

const DEFAULT_ROVER: Rover = {
    id: ROVER_EXISTENT_ID,
    startPosition: {
        id: uuidv4(),
        head: RoverHeadingDirections.NORTH,
        xCoordinate: 0,
        yCoordinate: 0,
    },
    currentPosition: {
        id: uuidv4(),
        head: RoverHeadingDirections.NORTH,
        xCoordinate: 0,
        yCoordinate: 0,
    },
    plateau: {
        id: uuidv4(),
        xCoordinate: 10,
        yCoordinate: 10,
    },
};

export function createMockRoverController(freshRover?: Rover) {
    const rovers: Partial<Rover>[] = [DEFAULT_ROVER];

    return {
        findById: async (id) => {
            if (freshRover) {
                [freshRover].find((rover) => (rover.id === id ? rover : null));
            }

            return rovers.find((rover) => (rover.id === id ? rover : null));
        },
        updateCurrentRoverPosition: async (
            id: string,
            newPosition: RoverPosition,
        ) => {
            return {};
        },
    } as RoverControllerType;
}
export const mockRoverController = createMockRoverController();
export const freshMockRoverController =
    createMockRoverController(DEFAULT_ROVER);

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

export const mockMountAndSaveRoverPosition: MountAndSaveRoverPosition =
    async function (posX: number, posY: number, head: RoverHeadingDirections) {
        const position = new RoverPosition();

        position.id = uuidv4();
        position.xCoordinate = posX;
        position.yCoordinate = posY;
        position.head = head;

        return position;
    };

export const mockMountAndSaveRoverMovement: MountAndSaveRoverMovement =
    async function (
        movementDone: RoverAllowedMovements,
        startPosition: RoverPosition,
        finalPosition: RoverPosition,
        rover: Rover,
    ) {
        const movement = new RoverMovement();
        movement.id = uuidv4();
        movement.movement = movementDone;
        movement.startPosition = startPosition;
        movement.finalPosition = finalPosition;
        movement.rover = rover;

        return movement;
    };
