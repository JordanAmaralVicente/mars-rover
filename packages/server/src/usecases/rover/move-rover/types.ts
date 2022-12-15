import { Rover, Plateau } from "../../../databases/typeorm/entities";
import { RoverHeadingDirections } from "../../../types/rover";

export type MoveRoverFunctionType = (
    rover: Rover,
    plateau: Plateau,
) => Promise<any>;

export type RoverDirection = "yCoordinate" | "xCoordinate";

export interface MoveForwardOptions {
    direction: RoverDirection;
    norm: number;
}

type MoveMapType = {
    [key in RoverHeadingDirections]:
        | RoverHeadingDirections
        | MoveForwardOptions;
};

export interface MoveMapInterface extends MoveMapType {}

export const moveLeftMap: MoveMapInterface = {
    E: RoverHeadingDirections.NORTH,
    N: RoverHeadingDirections.WEST,
    W: RoverHeadingDirections.SOUTH,
    S: RoverHeadingDirections.EAST,
};

export const moveRightMap: MoveMapInterface = {
    E: RoverHeadingDirections.SOUTH,
    S: RoverHeadingDirections.WEST,
    W: RoverHeadingDirections.NORTH,
    N: RoverHeadingDirections.EAST,
};

export const moveForwardMap: MoveMapInterface = {
    E: { direction: "xCoordinate", norm: 1 },
    W: { direction: "xCoordinate", norm: -1 },
    N: { direction: "yCoordinate", norm: 1 },
    S: { direction: "yCoordinate", norm: -1 },
};
