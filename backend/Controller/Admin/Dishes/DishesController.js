import DishSchema from "../../../Schema/Dishes.js";
import RestaurantSchema from "../../../Schema/Restaurants.js";
import {
  DishImageUpload,
  DishImageUploadPath,
} from "../../../Middleware/DishesMiddleware.js";

const AddNewRestaurantDish = async (req, res) => {
  const { name, amount, category, isVegetarian, isNonVegetarian, description } =
    req.body;

  try {
    const isRestaurantExist = await RestaurantSchema.findOne({
      adminId: req.user,
    });
    if (!isRestaurantExist) {
      return res.stats(403).json({
        errorMessage: "Permission Forbidden. You have no restaurants.",
      });
    }

    await DishImageUpload(category, name, isRestaurantExist._id);

    const newDish = await DishSchema.create({
      restaurantId: isRestaurantExist._id,
      name,
      amount,
      category,
      isVegetarian,
      isNonVegetarian,
      description,
      image: await DishImageUploadPath(),
    });

    if (newDish) {
      await RestaurantSchema.updateOne(
        { _id: isRestaurantExist._id },
        { $push: { dishes: newDish._id } }
      );
      return res.status(200).json({ newDish });
    } else {
      res.status(500).json({ errorMessage: "Internal Server Error" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errorMessage: "Internal Server Error" });
  }
};

export { AddNewRestaurantDish };
