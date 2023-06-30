import mongoose from "mongoose";

const databaseConnection = () => {
  mongoose.connect(process.env.MONGO_URL);
};

export default databaseConnection;
