import express from "express";
import { create } from "../controllers/listing.controller";
import { deleteListing } from "../controllers/listing.controller";
import { verifyToken } from "../utils/verifyUser";

const router = express.Router();

router.post("/create", verifyToken, create);
router.post("/delete/:id", verifyToken, deleteListing);

export default router;
