import express from "express";
import {
    addPlace,
    getAllPlaces,
    getPlaceById,
    deletePlace,
    updatePlace,
} from "../controllers/index.js";

import { upload } from "../middlewares/index.js";

export const placesRouter = express.Router();

placesRouter.get("/all", upload.single("place_image"), getAllPlaces);
placesRouter.get("/:id", getPlaceById);
placesRouter.post("/add", addPlace);
placesRouter.put("/update/:id", upload.single("place_image"), updatePlace);
placesRouter.delete("/delete/:id", deletePlace);
