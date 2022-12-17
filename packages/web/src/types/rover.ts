export enum RoverHeadingDirections {
  NORTH = "N",
  SOUTH = "S",
  WEST = "W",
  EAST = "E",
}

export interface RoverPosition {
  head: RoverHeadingDirections;
  id: string;
  xCoordinate: number;
  yCoordinate: number;
}
