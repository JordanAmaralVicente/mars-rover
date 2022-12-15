import { DataBaseSource } from "../../config";
import { RoverMovement } from "../../entities";

export const RoverMovementRepository =
    DataBaseSource.getRepository(RoverMovement);
