import { RoverPosition, Plateau } from "../databases/typeorm/entities";

type RoverDirection = "yCoordinate" | "xCoordinate";

export function isRoverOutOfBound(
    position: RoverPosition,
    direction: RoverDirection,
    plateau: Plateau,
): boolean {
    return position[direction] < 0 || position[direction] > plateau[direction];
}
