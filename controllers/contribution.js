import Donor from "../models/Donor.js";
import ProductStat from "../models/DonorStat.js";

export const getDonors = async (req, res) => {
  try {
    const donors = await Donor.find();

    const donorsWithStats = await Promise.all(
      donors.map(async (product) => {
        const stat = await DonorStat.find({
          id: donor._id,
        });
        return {
          ...donor._doc,
          stat,
        };
      })
    );

    res.status(200).json(contributions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
