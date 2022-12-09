import jwt from "jsonwebtoken";
import DriverModel from "../models/DriverModel.js";

// Check Driver Authentication
var checkDriverAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // get token from headers
      token = authorization.split(" ")[1];
      /* 
        driverId saved in token when we register and login 
        then we extract the driverId from verified token
    */
      const { driverId } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      //   Get driver by driverId
      req.driverByToken = await DriverModel.findById(driverId).select("-password");
      // For Next Code Execution, if Available
      next();
    } catch (error) {
      res.status(401).send({ message: "UnAuthorizaed Driver!" });
    }
  }

  if (!token) {
    res.status(401).send({ message: "No Token Found" });
  }
};

export default checkDriverAuth;
