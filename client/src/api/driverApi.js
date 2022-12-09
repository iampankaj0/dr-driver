import { apiPort } from "./apiPort";
import axios from "axios";

export const registerUser = async (name, phone, password, confirm_password) => {
  const response = await axios.post(`${apiPort}/driver-register`, {
    name,
    phone,
    password,
    confirm_password,
  });

  const result = response.data;
  return result;
};
