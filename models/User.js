import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
  {
    donor_firstname: {
      type: String,
      required: true,

    },
    donor_lastname: {
      type: String,
      required: true,

    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    donor_city: String,
    donor_state: String,
    donor_zip: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);


// id
// 13763843
// donor_firstname
// "Cynthia"
// donor_lastname
// "Jeremy"
// donor_city
// "TUCSON"
// donor_state
// "AZ"
// donor_zip
// 85741
// donor_is_eligible_for_express_lane
// true
// donor_phone
// "+18881125520"
// created_at
// "2021-05-20 03:24:47+00"
// order_number
// BinData(0, 'U0IyMjIyMzc5MTg=')
// contribution_form
// "Cheetah"
// refcodes
// "{"refcode": "ref-Crane"}"
// refcode
// "ref-Crane"
// recurring_period
// "monthly"
// recurring_duration
// "infinite"
// is_paypal
// false
// is_mobile
// true
// is_express
// true
// with_express_lane
// false
// express_signup
// false
// unique_identifier
// "qxHMqZAvjF"
// status
// "approved"
// text_message_option
// "unknown"
// custom_fields
// "[]"

const User = mongoose.model("User", UserSchema);
export default User;
