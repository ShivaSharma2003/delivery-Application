import UserSchema from "../../../Schema/UserAccount.js";
import generateToken from "../../../Utility/GenerateAuthorizedToken.js";

const RegisterUser = async (req, res) => {
  const { name, phoneNumber, email, password, isAdmin } = req.body;
  try {
    const isEmailExist = await UserSchema.findOne({ email: email });
    if (isEmailExist) {
      return res.status(403).json({ errorMessage: "Email Already Exist..." });
    }

    const newUser = await UserSchema.create({
      name,
      phoneNumber,
      email,
      password,
      isAdmin,
    });

    if (newUser) {
      return res.status(200).json(newUser);
    } else {
      return res.status(500).json({ error: "server Error occured" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Server Error Occured" });
  }
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isEmailExist = await UserSchema.findOne({ email: email });
    if (!isEmailExist) {
      return res
        .status(404)
        .json({ errorMessage: "Invalid email, User not Found" });
    }

    const isPasswordCorrect = isEmailExist.ComparePassword(password);
    if (isPasswordCorrect) {
      const authorizedUser = await UserSchema.findOne({ email: email }).select(
        "-password"
      );
      return res.status(200).json({ token: await generateToken(authorizedUser._id) });
    } else {
      return res.status(403).json({ errorMessage: "invalid Password" });
    }
  } catch (error) {
    return res.status(500).json({ error: "server Error Occured" });
  }
};

export { RegisterUser , LoginUser };
