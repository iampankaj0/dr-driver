import DriverModel from "../models/DriverModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Driver Registration
const driverRegistration = async (req, res) => {
  const { name, phone, password, confirm_password } = req.body;
  try {
    const driver = await DriverModel.findOne({ phone });
    if (driver) {
      res
        .status(401)
        .send({ success: false, message: "Mobile Number Already Exist!" });
    } else {
      if (name && phone && password && confirm_password) {
        if (phone.length === 10) {
          if (password.length >= 6) {
            if (password === confirm_password) {
              const salt = await bcrypt.genSalt(10);
              const hashPassword = await bcrypt.hash(password, salt);
              await DriverModel.create({
                name,
                phone,
                password: hashPassword,
              });
              // Recently Created Driver
              const createdDriver = await DriverModel.findOne({ phone });
              // Generate JWT Token
              const token = jwt.sign(
                { driverId: createdDriver._id },
                process.env.JWT_SECRET_KEY,
                { expiresIn: "5d" }
              );
              res.status(201).send({
                success: true,
                message: "Driver Successfully Registered!",
                token: token,
              });
            } else {
              res.status(401).send({
                success: false,
                message: "Password & Confirm Password doesn't match!",
              });
            }
          } else {
            res.status(401).send({
              success: false,
              message: "Password length will be minimum of six characters!",
            });
          }
        } else {
          res.status(401).send({
            success: false,
            message: "Phone number should be atleast ten characters!",
          });
        }
      } else {
        res
          .status(401)
          .send({ success: false, message: "All Fields Are Required!" });
      }
    }
  } catch (error) {
    res
      .status(401)
      .send({ success: false, message: "Something Went Wrong!", error: error });
  }
};

// Driver Login
const driverLogin = async (req, res) => {
  const { phone, password } = req.body;
  try {
    const driver = await DriverModel.findOne({ phone });
    if (driver) {
      const isPasswordMatched = await bcrypt.compare(password, driver.password);
      if (phone === driver.phone && isPasswordMatched) {
        const token = jwt.sign(
          { driverId: driver._id },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "5d" }
        );
        res.status(200).send({
          success: true,
          message: "Driver Login Successfully!",
          token: token,
        });
      } else {
        res.status(401).send({
          success: false,
          message: "Phone number or password is incorrect!",
        });
      }
    } else {
      res.status(401).send({
        success: false,
        message: "Driver Not Found, Please Register!",
      });
    }
  } catch (error) {
    res
      .status(401)
      .send({ success: false, message: "Something Went Wrong!", error: error });
  }
};

// Change Driver Password
const changeDriverPassword = async (req, res) => {
  const { old_password, password, confirm_password } = req.body;
  try {
    const driver = await DriverModel.findById(req.driverByToken._id);
    const isPasswordMatched = await bcrypt.compare(
      old_password,
      driver.password
    );
    if (isPasswordMatched) {
      if (old_password && password && confirm_password) {
        if (password.length >= 6) {
          if (password === confirm_password) {
            const salt = await bcrypt.genSalt(10);
            const newHashPassword = await bcrypt.hash(password, salt);
            await DriverModel.findByIdAndUpdate(driver._id, {
              password: newHashPassword,
            });
            res.status(200).send({
              success: true,
              message: "Password Successfully Changed!",
            });
          } else {
            res.status(401).send({
              success: false,
              message: "Password & Confirm Password doesn't match!",
            });
          }
        } else {
          res.status(401).send({
            success: false,
            message: "Password should be atleast six characters!",
          });
        }
      } else {
        res
          .status(401)
          .send({ success: false, message: "All fields are required!" });
      }
    } else {
      res
        .status(401)
        .send({ success: false, message: "Old Password is incorrect!" });
    }
  } catch (error) {
    res
      .status(401)
      .send({ success: false, message: "Something Went Wrong!", error: error });
  }
};

// Stay Login Driver - with Driver Details
const driverLoginWithDetails = (req, res) => {
  res.send({
    success: true,
    message: "Driver Successfully Logged in",
    driver: req.driverByToken,
  });
};

export const DriverControllers = {
  driverRegistration,
  driverLogin,
  changeDriverPassword,
  driverLoginWithDetails,
};
