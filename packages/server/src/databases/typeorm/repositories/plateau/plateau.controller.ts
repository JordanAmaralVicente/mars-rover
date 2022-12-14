import { PlateauRepository } from "./plateau.repository";
import { Plateau } from "../../entities";

export class PlateauController {
    static findAll() {
        return PlateauRepository.find();
    }

    static save(plateau: Partial<Plateau>) {
        return PlateauRepository.save(plateau);
    }
}
