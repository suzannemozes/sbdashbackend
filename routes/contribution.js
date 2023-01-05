import express from "express";
import { getDonors } from "../controllers/contribution.js";

const router = express.Router();

router.get("/donors", getDonors);

export default router;
