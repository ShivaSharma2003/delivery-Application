import AddressSchema from "../../../Schema/Address.js";
import UserAccountSchema from "../../../Schema/UserAccount.js";

const addNewUserAddress = async (req, res) => {
  const {
    userName,
    phoneNumber,
    category,
    Block,
    plotNumber,
    landmark,
    streetName,
    locality,
    pincode,
    city,
    state,
    country,
  } = req.body;

  try {
    const newAddress = await AddressSchema.create({
      userId: req.user,
      userName,
      phoneNumber,
      category,
      Block,
      plotNumber,
      landmark,
      streetName,
      locality,
      pincode,
      city,
      state,
      country,
    });

    if (newAddress) {
      await UserAccountSchema.updateOne(
        { _id: req.user },
        { $push: { address: newAddress._id } }
      );
      return res.status(200).json({ newAddress });
    } else {
      return res.status(500).json({ errorMessage: "internal Server Error" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errorMessage: "Internal Server Error" });
  }
};

export { addNewUserAddress };
