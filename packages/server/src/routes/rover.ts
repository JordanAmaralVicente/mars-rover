import { Router } from "express";

import * as RoverController from "../controllers/rover";

const router = Router();

router.post("/", RoverController.initializeAndMoveRover);
router.put("/init", RoverController.initializeRover);
router.post("/move", RoverController.moveRover);

export default router;
