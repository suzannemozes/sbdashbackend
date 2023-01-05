import mongoose from "mongoose";

const DonorStatSchema = new mongoose.Schema({
  id: Number,
  donor_firstname: String,
  donor_lastname: String,
  donor_city: String,
  donor_state: String,
  donor_zip: Number,
  refcode: String,
  amount: {
    $numberDecimal: String,
  },
  paid_at: String,
});

const DonorStat = mongoose.model("DonorStat", DonorStatSchema);
export default DonorStat;
