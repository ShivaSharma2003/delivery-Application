import Restaurant from "../../../Schema/Restaurants.js";

const getAllRestaurants = async (req, res) => {
  try {
    const Restaurants = await Restaurant.find();
    if (Restaurants) {
      return res.status(200).json(Restaurants);
    } else {
      return res.status(404).json({ errorMessage: "No restaurant found" });
    }
  } catch (error) {
    return res.status(500).json({ errorMessage: "Internal Server Error" });
  }
};

export { getAllRestaurants };
