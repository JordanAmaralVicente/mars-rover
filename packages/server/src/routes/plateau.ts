import { Router } from "express";

import * as PlateauController from "../controllers/plateau";

const router = Router();

router.post("/initialize", PlateauController.initializePlateau);

export default router;
