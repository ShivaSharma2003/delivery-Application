import jwt from "jsonwebtoken";

const generateToken = async (id) => {
  const generatedToken = jwt.sign({ id }, process.env.SCERET_STRING, {
    expiresIn: "15d",
  });
  return generatedToken;
};

export default generateToken;
