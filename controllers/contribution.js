import Donor from "../models/Donor.js";
import DonorStat from "../models/DonorStat.js";
import User from "../models/User.js";

export const getDonors = async (req, res) => {
  try {
    const donors = await User.find();
    res.status(200).json(donors);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getDonations = async (req, res) => {
  try {
    const donations = await User.find();
    res.status(200).json(donations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
