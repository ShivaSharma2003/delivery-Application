import jwt from "jsonwebtoken";

const Authorize = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodedToken = await jwt.verify(token, process.env.SCERET_STRING);
      req.user = decodedToken.id;
      next();
    } catch (error) {
      return res.status(500).json({ errorMessage: "Internal Server Error" });
    }
  } else {
    return res.status(403).json({ errorMessage: "Token Not Found" });
  }
};

export default Authorize;
