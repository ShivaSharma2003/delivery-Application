import express from "express";
import { getAllRestaurants } from "../../../Controller/Common/Restaurant/RestaurantController.js";

const router = express.Router();

// http://localhost:5000/api/get/restaurants
router.get("/api/get/restaurants", getAllRestaurants);

export default router;
