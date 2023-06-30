import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import databaseconnection from "./database.js";
import mongoose from "mongoose";
import UserRoutes from "./Routes/Common/User/UserRoutes.js";
import RestaurantRoutes from "./Routes/Admin/Restaurant/RestaurantRoutes.js";
import AddressRoute from './Routes/Common/Address/AddressRoute.js'

const app = express();

dotenv.config();
cors();
app.use(express.json());

// --------- Database Connection ----------------
databaseconnection();

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("database Successfully connected");
});

// ------------------------------------------------

// -------- Common Routes --------
app.use("/", UserRoutes);
app.use("/" , AddressRoute)

// -------------------------------

// ------ Admin Routes ------------
app.use("/admin", RestaurantRoutes);
// -------------------------------
app.get("/", (req, res) => {
  res.send("Hello World, This is swiggy clone backend...");
});

app.listen(process.env.PORT, () => {
  console.log(`Serving listing http://localhost:${process.env.PORT}`);
});
