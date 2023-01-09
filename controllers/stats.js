import User from "../models/User.js";

export const getStats = async (req, res) => {
  try {
    const stats = await User.find();
    res.status(200).json(stats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const getDonations = async (req, res) => {
//   try {
//     const donations = await User.find();
//     res.status(200).json(donations);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };


