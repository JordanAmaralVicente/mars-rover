import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types/http-codes";
import { RoverHeadingDirections } from "../../types/rover";
import { initAndMoveRover } from "../../usecases/rover";

interface InitializeAndMoveRoverDTO {
    posX: number;
    posY: number;
    head: RoverHeadingDirections;
    movements: string;
    plateauId: string;
}

async function initializeAndMoveRoverController(req: Request, res: Response) {
    const { posX, posY, movements, head, plateauId } =
        req.body as InitializeAndMoveRoverDTO;

    if (!movements || !plateauId || !head) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({
            error: {
                message: "Required data not provided!",
            },
        });
    }

    const result = await initAndMoveRover(
        plateauId,
        posX,
        posY,
        head,
        movements,
    );

    const resultStatus = result?.error
        ? HTTP_STATUSES.BAD_REQUEST
        : HTTP_STATUSES.OK;

    return res.status(resultStatus).json({
        ...result,
    });
}

export default initializeAndMoveRoverController;
