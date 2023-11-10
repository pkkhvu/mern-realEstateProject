import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route";
import authRouter from "./routes/auth.route";

dotenv.config();

mongoose.connect(process.env.MONGODBURL).then(() => {
  console.log("connected!").catch((err) => {
    console.log(err);
  });
});

const app = express();
app.use(express.json());

app.listen(3333, () => {
  console.log("server is running on port 3333");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
