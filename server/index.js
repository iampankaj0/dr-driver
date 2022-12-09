import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import driverRoutes from "./routes/driverRoutes.js";

// Configure .env file for getting globle enviournment Variables
dotenv.config();

const app = express();
const port = process.env.PORT;
const DATABASE_URI = process.env.DATABASE_URI;

// for cor erros
app.use(cors());
app.use(express.json());

// Connect DataBase
connectDB(DATABASE_URI);

// Connect Routes With Server
app.use(userRoutes); // Routes For User Role
app.use(driverRoutes); // Routes For Driver Role

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
