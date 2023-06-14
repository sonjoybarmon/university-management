import mongoose from "mongoose";
import config from "./config/index";
import app from "./app";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.database_url);

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to connect database", error);
  }
};

connectDB();
