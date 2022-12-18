import {
    PlateauController,
    RoverController,
} from "../../databases/typeorm/repositories";

import createInitRover from "./init-rover";
import createMoveRover from "./move-rover";

export const initRover = createInitRover({
    plateauController: PlateauController,
});

export const moveRover = createMoveRover({
    roverController: RoverController,
});
