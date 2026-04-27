import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import convertRouter from "./convert.js";
import calendarRouter from "./calendar.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use(convertRouter);
router.use(calendarRouter);

export default router;
