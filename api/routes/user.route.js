import express from "express";
import { updateUser } from "../controllers/user.controller";
import { deleteUser } from "../controllers/user.controller";
import { getUserListings } from "../controllers/user.controller";
import { verifyToken } from "../utils/verifyUser";

const router = express.Router();

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);

export default router;
