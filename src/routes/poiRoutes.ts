import { Router } from "express";
import { getPOIs, addPOI } from "../services/poiService";

const router = Router();

router.get("/", getPOIs);
router.post("/", addPOI);

export default router;
