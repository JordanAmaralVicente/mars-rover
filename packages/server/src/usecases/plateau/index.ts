import { PlateauController } from "../../databases/typeorm/repositories";

import createInitPlateau from "./init-plateau";

export const initializePlateau = createInitPlateau({
    plateauController: PlateauController,
});
