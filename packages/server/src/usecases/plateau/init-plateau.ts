import { Plateau } from "../../databases/typeorm/entities";
import { PlateauControllerType } from "../../databases/typeorm/repositories";

interface DI {
    plateauController: PlateauControllerType;
}

const createInitPlateau = ({
    plateauController,
}: DI) => async (posX: number, posY: number): Promise<Plateau> => {
    const plateau = await plateauController.save({
        xCoordinate: posX,
        yCoordinate: posY,
    });

    return plateau;
};

export default createInitPlateau;
