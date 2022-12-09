import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// User Registration
const userRegistration = async (req, res) => {
  const { name, phone, password, confirm_password } = req.body;
  try {
    const user = await UserModel.findOne({ phone });
    if (user) {
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
              await UserModel.create({
                name,
                phone,
                password: hashPassword,
              });
              // Recently Created User
              const createdUser = await UserModel.findOne({ phone });
              // Generate JWT Token
              const token = jwt.sign(
                { userId: createdUser._id },
                process.env.JWT_SECRET_KEY,
                { expiresIn: "5d" }
              );
              res.status(201).send({
                success: true,
                message: "User Successfully Registered!",
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

// User Login
const userLogin = async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await UserModel.findOne({ phone });
    if (user) {
      const isPasswordMatched = await bcrypt.compare(password, user.password);
      if (phone === user.phone && isPasswordMatched) {
        const token = jwt.sign(
          { userId: user._id },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "5d" }
        );
        res.status(200).send({
          success: true,
          message: "User Login Successfully!",
          token: token,
        });
      } else {
        res.status(401).send({
          success: false,
          message: "Phone number or password is incorrect!",
        });
      }
    } else {
      res
        .status(401)
        .send({ success: false, message: "User Not Found, Please Register!" });
    }
  } catch (error) {
    res
      .status(401)
      .send({ success: false, message: "Something Went Wrong!", error: error });
  }
};

// Change User Password
const changeUserPassword = async (req, res) => {
  const { old_password, password, confirm_password } = req.body;
  try {
    const user = await UserModel.findById(req.userByToken._id);
    const isPasswordMatched = await bcrypt.compare(old_password, user.password);
    if (isPasswordMatched) {
      if (old_password && password && confirm_password) {
        if (password.length >= 6) {
          if (password === confirm_password) {
            const salt = await bcrypt.genSalt(10);
            const newHashPassword = await bcrypt.hash(password, salt);
            await UserModel.findByIdAndUpdate(user._id, {
              password: newHashPassword,
            });
            res.status(200).send({
              success: true,
              message: "Password Changed Successfully!",
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

// Stay Login User - with User Details
const userLoginWithDetails = (req, res) => {
  res.send({
    success: true,
    message: "User Successfully Logged in",
    user: req.userByToken,
  });
};

export const UserControllers = {
  userRegistration,
  userLogin,
  changeUserPassword,
  userLoginWithDetails,
};
