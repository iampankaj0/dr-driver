import express from "express";
import { UserControllers } from "../controllers/userController.js";
import checkUserAuth from "../middlewares/userAuth.js";

const router = express.Router();

// PUBLIC ROUTES
router.route("/user-register").post(UserControllers.userRegistration);
router.route("/user-login").post(UserControllers.userLogin);

// PRIVATE ROUTES
router.route("/change-user-password").post(checkUserAuth, UserControllers.changeUserPassword);
router.route("/user-login-details").get(checkUserAuth, UserControllers.userLoginWithDetails);

export default router;
