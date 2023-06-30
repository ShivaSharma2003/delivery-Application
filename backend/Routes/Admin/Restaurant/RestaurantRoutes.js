import express, { Router } from "express";
import { registerNewRestaurant } from "../../../Controller/Admin/Restaurant/RestaurantController.js";
import Authorize from "../../../Middleware/AuthorizeMiddleware.js";
const router = express.Router();

// http://localhost:5000/admin/api/restaurant/new/register
router.post(
  "/api/restaurant/new/register",
  Authorize,
  registerNewRestaurant
);

export default router;
