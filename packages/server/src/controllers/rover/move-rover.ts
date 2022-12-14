import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types/http-codes";

interface InitializeAndMoveRoverDTO {
    posX: number;
    posY: number;
    movements: string;
}

async function initializeAndMoveRover(req: Request, res: Response) {
    const { posX, posY, movements } = req.body as InitializeAndMoveRoverDTO;
    
    if (!posX || !posY || !movements) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({
            error: {
                message: "Required data not provided!",
            },
        });
    }


    // TODO: init rover and make movements
}

export default initializeAndMoveRover;
