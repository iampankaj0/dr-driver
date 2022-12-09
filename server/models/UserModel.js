import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, require: true },
  phone: { type: Number, require: true, length: 10 },
  password: { type: String, require: true },
  createdAt: { type: Date, default: new Date() },
  role: { type: String, default: "user" },
});

const UserModel = new mongoose.model("user", UserSchema);

export default UserModel;
