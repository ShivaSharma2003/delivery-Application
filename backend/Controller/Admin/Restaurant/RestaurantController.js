import RestaurantSchema from "../../../Schema/Restaurants.js";
import UserSchema from "../../../Schema/UserAccount.js";

const registerNewRestaurant = async (req, res) => {
  const {
    name,
    description,
    category,
    Image,
    address,
    state,
    city,
    phoneNumber,
    email,
    openAt,
    closeAt,
  } = req.body;

  try {
    const isUserAdmin = await UserSchema.findById(req.user);
    if (!isUserAdmin.isAdmin) {
      return res.status(403).json({ errorMessage: "Permission Forbidden!!" });
    } else {
      const newRestaurant = await RestaurantSchema.create({
        adminId: req.user,
        name,
        description,
        category,
        Image,
        address,
        state,
        city,
        phoneNumber,
        email,
        openAt,
        closeAt,
      });

      if (newRestaurant) {
        return res.status(200).json({ newRestaurant });
      } else {
        return res.status(500).json({ errorMessage: "Internal Server Error" });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errorMessage: "Internal Server Error" });
  }
};

export { registerNewRestaurant };
