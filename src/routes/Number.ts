import { Router } from "express";
import controller from "../controllers/NumberControllers";

const router = Router();

router.get("/numbers", controller.index);

export default router;
