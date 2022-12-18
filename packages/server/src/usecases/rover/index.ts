import {
    PlateauController,
    RoverController,
} from "../../databases/typeorm/repositories";

import createInitAndMoveRover from "./init-and-move-rover";
import createInitRover from "./init-rover";
import createMoveRover from "./move";

export const initAndMoveRover = createInitAndMoveRover({
    plateauController: PlateauController,
    roverController: RoverController,
});

export const initRover = createInitRover({
    plateauController: PlateauController,
});

export const moveRover = createMoveRover({
    roverController: RoverController,
});
