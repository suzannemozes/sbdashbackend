import User from "../models/User.js";

export const getContributions = async (req, res) => {
  export const getUser = async (req, res) => {
    try {
      const contributions = await User.find({ role: "user" }).select(
        "-password"
      );
      res.status(200).json(contributions);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
};
