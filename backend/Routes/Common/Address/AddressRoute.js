import express from "express";
import Authorize from "../../../Middleware/AuthorizeMiddleware.js";
import { addNewUserAddress } from "../../../Controller/Common/Address/AddressController.js";

const router = express.Router();

// http://localhost:5000/api/user/address/new/post
router.post("/api/user/address/new/post", Authorize, addNewUserAddress);

export default router;
