import express from "express";
import { getContributions } from "../controllers/contribution.js";

const router = express.Router();

router.get("/contributions", getContributions);

export default router;
