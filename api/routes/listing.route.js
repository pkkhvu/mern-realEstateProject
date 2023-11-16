import express from "express";
import { create } from "../controllers/listing.controller";
import { deleteListing } from "../controllers/listing.controller";
import { updateListing } from "../controllers/listing.controller";
import { getListing } from "../controllers/listing.controller";
import { getListings } from "../controllers/listing.controller";
import { verifyToken } from "../utils/verifyUser";

const router = express.Router();

router.post("/create", verifyToken, create);
router.post("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/get/:id", verifyToken, getListing);
router.get("/get", verifyToken, getListings);

export default router;
