import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";

// Check User Authentication
var checkUserAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // get token from headers
      token = authorization.split(" ")[1];
      /* 
        userId saved in token when we register and login 
        then we extract the userId from verified token
    */
      const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      //   Get user by userId
      req.userByToken = await UserModel.findById(userId).select("-password");
      // For Next Code Execution, if Available
      next();
    } catch (error) {
      res.status(401).send({ message: "UnAuthorizaed User!" });
    }
  }

  if (!token) {
    res.status(401).send({ message: "No Token Found" });
  }
};

export default checkUserAuth;
