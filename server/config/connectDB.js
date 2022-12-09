import mongoose from "mongoose";

export const connectDB = async (DB_URI) => {
  try {
    const DB_OPTIONS = {
      dbName: "Dr-Driver-DB",
    };
    mongoose.set("strictQuery", false);
    await mongoose.connect(DB_URI, DB_OPTIONS);
    console.log(`DB Connected at ${DB_URI}`);
  } catch (error) {
    console.log("DataBase Error " + error);
  }
};
