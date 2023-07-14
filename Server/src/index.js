import "dotenv/config.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/routes.js";

const app = express();
const connect = async () => {
    try {
      await mongoose.connect(`${process.env.DATABASE_URL}`, {useNewUrlParser: true});
      app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/user", userRoutes);