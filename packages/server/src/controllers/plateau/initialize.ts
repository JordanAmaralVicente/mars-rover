import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types/http-codes";
import { initializePlateau } from "../../usecases/plateau";

interface InitializePlateauDTO {
    posX: number;
    posY: number;
}

async function initializePlateauController(req: Request, res: Response) {
    const { posX, posY } = req.body as InitializePlateauDTO;

    if (!posX || !posY) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({
            error: {
                message: "Required data not provided!",
            },
        });
    }

    const initializedPlateau = await initializePlateau(posX, posY);

    return res.status(HTTP_STATUSES.CREATED).json({
        initializedPlateau,
    });
}

export default initializePlateauController;
