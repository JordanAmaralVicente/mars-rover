import {
    PlateauController,
    RoverController,
} from "../../databases/typeorm/repositories";
import { mountAndSaveRoverPosition } from "../../services/position/mount-and-rover-position";
import { mountAndSaveRover } from "../../services/rover/mount-and-save-rover";

import createInitRover from "./init-rover";
import createMoveRover from "./move-rover";

export const initRover = createInitRover({
    plateauController: PlateauController,
    mountAndSaveRoverPosition,
    mountAndSaveRover,
});

export const moveRover = createMoveRover({
    roverController: RoverController,
});
