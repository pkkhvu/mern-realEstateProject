import express from "express";
import { updateUser } from "../controllers/user.controller";
import { verifyToken } from "../utils/verifyUser";

const router = express();

router.post("/update/:id", verifyToken, updateUser);

export default router;
