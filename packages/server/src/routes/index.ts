import { Router } from "express";

import PlateauRouter from "./plateau";
import RoverRouter from "./rover";

const router = Router();

router.use("/plateau", PlateauRouter);
router.use("/rover", RoverRouter);

export default router;
