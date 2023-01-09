import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import contributionRoutes from "./routes/contribution.js";
import generalRoutes from "./routes/general.js";
import statsRoutes from "./routes/stats.js";

//data imports
import User from "./models/User.js";
import State from "./models/State.js";

import {
  data,
  dataSmallDonorSample,
  dataDonor,
  dataDonorStat,
  dataState,
} from "./data/index.js";

// CONFIG
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use("/contribution", contributionRoutes);
app.use("/general", generalRoutes);
app.use("/stats", statsRoutes);

// MONGOOSE
const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server port: ${PORT}`));
    // Donor.insertMany(dataSmallDonorSample);
    // State.insertMany(dataState);
  })
  .catch((error) => console.log(`${error} did not connect`));
