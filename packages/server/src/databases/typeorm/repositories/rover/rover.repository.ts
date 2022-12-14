import { DataBaseSource } from "../../config";
import { Rover } from "../../entities";

export const RoverRepository = DataBaseSource.getRepository(Rover);
