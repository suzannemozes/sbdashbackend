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

export const getTransactions = async (req, res) => {
  try {
    // sort should look like this: { "field": "userId", "sort": "desc"}
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // formatted sort should look like { userId: -1 }
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
      };

      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const transactions = await User.find({
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await User.countDocuments({
      name: { $regex: search, $options: "i" },
    });

    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//not functioning and needs work // data isn't properly formatted for nivo
export const getGeo = async (req, res) => {
  try {
    const users = await User.find();

    const mappedStates = users.reduce((acc, state) => {
      acc[state]++;
    }, {});

    const formattedStates = Object.entries(mappedStates).map(
      ([state, count]) => {
        return { id: state, value: count };
      }
    );
    res.status(200).json(formattedStates);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
