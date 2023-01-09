import mongoose from "mongoose";

const StateSchema = new mongoose.Schema({
  _id: String,
  avg_amt: String,
  max_amt: String,
  n_donors: Number,
  tot_amt: String,
});

const State = mongoose.model("State", StateSchema);
export default State;
