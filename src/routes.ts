import { Router } from "express";
import number from "./routes/Number";

const router = Router();

router.use(number);

export default router;
