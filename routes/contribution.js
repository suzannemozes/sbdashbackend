import express from "express";
import { getContributions } from "../controllers/client.js";

const router = express.Router();

router.get("/contributions", getContributions);

export default router;
