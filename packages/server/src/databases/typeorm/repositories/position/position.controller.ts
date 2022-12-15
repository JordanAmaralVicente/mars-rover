import { RoverPositionRepository } from "./position.repository";
import { RoverPosition } from "../../entities";

export class RoverPositionController {
    static findAll() {
        return RoverPositionRepository.find();
    }

    static save(position: Partial<RoverPosition>) {
        return RoverPositionRepository.save(position);
    }

    static update(id: string, position: Partial<RoverPosition>) {
        return RoverPositionRepository.update(
            {
                id,
            },
            position,
        );
    }
}

export type RoverPositionControllerType = typeof RoverPositionController;
