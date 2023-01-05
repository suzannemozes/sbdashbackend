import mongoose from "mongoose";

const DonorSchema = new mongoose.Schema({
  id: Number,
  donor_firstname: String,
  donor_lastname: String,
  contribution_form: String,
  refcode: String,
});

const Donor = mongoose.model("Donor", DonorSchema);
export default Donor;
