import { RoverRepository } from "./rover.repository";
import { Rover } from "../../entities";

export class RoverController {
    static findAll() {
        return RoverRepository.find();
    }

    static findByPlateauId(id: string) {
        return RoverRepository.find({
            where: {
                plateau: {
                    id,
                }
            }
        });
    }

    static save(rover: Partial<Rover>) {
        return RoverRepository.save(rover);
    }
}

export type RoverControllerType = typeof RoverController;
