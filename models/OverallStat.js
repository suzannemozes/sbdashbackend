import mongoose from "mongoose";

const OverallStatSchema = new mongoose.Schema({
  _id: String,
  avg_amt: String,
  max_amt: String,
  n_donors: Number,
  tot_amt: String,
});

const OverallStat = mongoose.model("OverallStat", OverallStatSchema);
export default OverallStat;
