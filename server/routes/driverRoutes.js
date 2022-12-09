import express from "express";
import { DriverControllers } from "../controllers/driverController.js";
import checkDriverAuth from "../middlewares/driverAuth.js";

const router = express.Router();

// PUBLIC ROUTES
router.route("/driver-register").post(DriverControllers.driverRegistration);
router.route("/driver-login").post(DriverControllers.driverLogin);

// PRIVATE ROUTES
router.route("/change-driver-password").post(checkDriverAuth, DriverControllers.changeDriverPassword);
router.route("/driver-login-details").get(checkDriverAuth, DriverControllers.driverLoginWithDetails);

export default router;
