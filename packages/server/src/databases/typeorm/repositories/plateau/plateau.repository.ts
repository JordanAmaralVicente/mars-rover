import { DataBaseSource } from "../../config";
import { Plateau } from "../../entities";

export const PlateauRepository = DataBaseSource.getRepository(Plateau);
