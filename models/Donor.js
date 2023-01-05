import mongoose from "mongoose";

const DonorSchema = new mongoose.Schema({
  _id: {
    $oid: String,
  },
  id: Number,
  donor_firstname: String,
  donor_lastname: String,
  donor_city: String,
  donor_state: String,
  donor_zip: String,
  donor_phone: String,
  created_at: {
    $date: {
      $numberLong: Date,
    },
  },
});

const Donor = mongoose.model("Donor", DonorSchema);
export default Donor;
