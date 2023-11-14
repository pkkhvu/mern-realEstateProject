import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route";
import authRouter from "./routes/auth.route";
import listingRouter from "./routes/listing.route";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose.connect(process.env.MONGODBURL).then(() => {
  console.log("connected!").catch((err) => {
    console.log(err);
  });
});

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3333, () => {
  console.log("server is running on port 3333");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

//middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message,
  });
});
