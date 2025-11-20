import { Router } from "express";
import { findRiskController } from "../controllers/foodRiskController";

const router = Router();

router.get("/find-risk", findRiskController);

export default router;
