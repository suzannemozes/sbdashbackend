import User from "../models/User.js";

export const getContributions = async (req, res) => {
  const getUser = async (req, res) => {
    try {
      const contributions = await User.findById(id);
      res.status(200).json(contributions);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
};
