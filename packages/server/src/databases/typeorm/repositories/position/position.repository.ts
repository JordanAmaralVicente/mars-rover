import { DataBaseSource } from "../../config";
import { RoverPosition } from "../../entities";

export const RoverPositionRepository =
    DataBaseSource.getRepository(RoverPosition);
