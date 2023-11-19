import express from "express";
import { createListing } from "../controllers/listing.controller.js";
import { deleteListing } from "../controllers/listing.controller.js";
import { updateListing } from "../controllers/listing.controller.js";
import { getListing } from "../controllers/listing.controller.js";
import { getListings } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.post("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/get/:id", verifyToken, getListing);
router.get("/get", getListings);

export default router;
