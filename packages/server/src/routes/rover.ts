import { Router } from "express";

import * as RoverController from "../controllers/rover";

const router = Router();

router.post("/", RoverController.initializeAndMoveRover);


export default router;
