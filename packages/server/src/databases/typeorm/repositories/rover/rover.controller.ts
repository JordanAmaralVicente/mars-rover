import { RoverRepository } from "./rover.repository";
import { Rover, RoverPosition } from "../../entities";

export class RoverController {
    static findAll() {
        return RoverRepository.find();
    }

    static findByPlateauId(id: string) {
        return RoverRepository.find({
            where: {
                plateau: {
                    id,
                },
            },
        });
    }

    static save(rover: Partial<Rover>) {
        return RoverRepository.save(rover);
    }

    static async findById(id: string) {
        return await RoverRepository.findOne({
            where: { id },
            relations: {
                plateau: true,
                currentPosition: true,
                startPosition: true,
            },
        });
    }

    static updateCurrentRoverPosition(
        id: string,
        currentPosition: RoverPosition,
    ) {
        return RoverRepository.update(
            { id },
            {
                currentPosition,
            },
        );
    }
}

export type RoverControllerType = typeof RoverController;
