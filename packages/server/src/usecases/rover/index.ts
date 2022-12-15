import {
    PlateauController,
    RoverController,
} from "../../databases/typeorm/repositories";

import createInitAndMoveRover from "./init-and-move-rover";

export const initAndMoveRover = createInitAndMoveRover({
    plateauController: PlateauController,
    roverController: RoverController,
});
