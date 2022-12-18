import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types/http-codes";
import { RoverHeadingDirections } from "../../types/rover";
import { moveRover } from "../../usecases/rover";

interface InitializeRoverDTO {
    movements: string;
    roverId: string;
}

async function initializeRoverController(req: Request, res: Response) {
    const { roverId, movements } = req.body as InitializeRoverDTO;

    if (!roverId || !movements) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({
            error: {
                message: "Required data not provided!",
            },
        });
    }

    const result = await moveRover(roverId, movements);

    const resultStatus = result?.error
        ? HTTP_STATUSES.BAD_REQUEST
        : HTTP_STATUSES.OK;

    return res.status(resultStatus).json({
        ...result,
    });
}

export default initializeRoverController;
