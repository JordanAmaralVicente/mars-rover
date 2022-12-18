import { RoverController } from "../../databases/typeorm/repositories";
import { mountAndSaveRoverMovement } from "../movement/mount-and-save-movement";
import { mountAndSaveRoverPosition } from "../position/mount-and-rover-position";

import { mountAndSaveRover } from "./mount-and-save-rover";
import createMoveRoverForward from "./move-forward";
import createMoveRoverLeft from "./move-left";
import createMoveRoverRight from "./move-right";

export { mountAndSaveRover };
export * from "./types";

export const moveRoverForward = createMoveRoverForward({
    mountAndSaveRoverMovement,
    mountAndSaveRoverPosition,
    roverController: RoverController,
});

export const moveRoverLeft = createMoveRoverLeft({
    mountAndSaveRoverMovement,
    mountAndSaveRoverPosition,
    roverController: RoverController,
});

export const moveRoverRight = createMoveRoverRight({
    mountAndSaveRoverMovement,
    mountAndSaveRoverPosition,
    roverController: RoverController,
});
