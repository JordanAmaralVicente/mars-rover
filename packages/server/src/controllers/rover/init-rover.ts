import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types/http-codes";
import { RoverHeadingDirections } from "../../types/rover";
import { initRover } from "../../usecases/rover";

interface InitializeRoverDTO {
    posX: number;
    posY: number;
    head: RoverHeadingDirections;
    movements: string;
    plateauId: string;
}

async function initializeRoverController(req: Request, res: Response) {
    const { posX, posY, head, plateauId } = req.body as InitializeRoverDTO;

    if (!plateauId || !head) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({
            error: {
                message: "Required data not provided!",
            },
        });
    }

    const result = await initRover(plateauId, posX, posY, head);

    const resultStatus = result?.error
        ? HTTP_STATUSES.BAD_REQUEST
        : HTTP_STATUSES.OK;

    return res.status(resultStatus).json({
        ...result,
    });
}

export default initializeRoverController;
