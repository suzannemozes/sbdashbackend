import express from "express";
import { getDonors, getDonations, getTransactions } from "../controllers/contribution.js";

const router = express.Router();

router.get("/donors", getDonors);
router.get("/donations", getDonations);
router.get("/transactions", getTransactions);
router.get("/geo", getGeo);



export default router;
