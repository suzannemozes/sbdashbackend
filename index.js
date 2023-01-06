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
import managementRoutes from "./routes/management.js";

//data imports
import User from "./models/User.js";

import {
  data,
  dataSmallDonorSample,
  dataDonor,
  dataDonorStat,
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
app.use("/management", managementRoutes);

// MONGOOSE
const PORT = process.env.PORT || 9000;
// const client = await MongoClient.connect(
//   "mongodb+srv://suzannemozes:Req33Fir3@cluster0.f0fagr4.mongodb.net/test",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
// const coll = client.db("switchboard").collection("actbluedata");
// const cursor = coll.aggregate(agg);
// const result = await cursor.toArray();
// await client.close();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server port: ${PORT}`));
    // Donor.insertMany(dataSmallDonorSample);
    // DonorStat.insertMany(dataDonorStat);
  })
  .catch((error) => console.log(`${error} did not connect`));
