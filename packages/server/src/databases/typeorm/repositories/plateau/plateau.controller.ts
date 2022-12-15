import { PlateauRepository } from "./plateau.repository";
import { Plateau } from "../../entities";

export class PlateauController {
    static findAll() {
        return PlateauRepository.find();
    }

    static findById(id: string) {
        return PlateauRepository.findOneBy({
            id,
        });
    }

    static save(plateau: Partial<Plateau>) {
        return PlateauRepository.save(plateau);
    }
}

export type PlateauControllerType = typeof PlateauController;
