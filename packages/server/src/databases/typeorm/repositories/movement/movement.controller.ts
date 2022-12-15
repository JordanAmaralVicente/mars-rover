import { RoverMovementRepository } from "./movement.repository";
import { RoverMovement } from "../../entities";

export class RoverMovementController {
    static findAll() {
        return RoverMovementRepository.find();
    }

    static findByRoverId(id: string) {
        return RoverMovementRepository.findOneBy({
            rover: {
                id,
            },
        });
    }

    static save(movement: Partial<RoverMovement>) {
        return RoverMovementRepository.save(movement);
    }
}

export type RoverMovementControllerType = typeof RoverMovementController;
