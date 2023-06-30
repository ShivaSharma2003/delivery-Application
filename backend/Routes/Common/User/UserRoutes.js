import express from "express";
import {
  RegisterUser,
  LoginUser,
} from "../../../Controller/Common/User/UserController.js";

const router = express.Router();

// http:/localhost:5000/api/user/post/register
router.post("/api/user/post/register", RegisterUser);

// http://localhost:5000/api/user/post/login
router.post("/api/user/post/login", LoginUser);

export default router;
