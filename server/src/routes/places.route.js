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

placesRouter.get("/all", getAllPlaces);
placesRouter.get("/:id", getPlaceById);
placesRouter.post("/add", upload.single("image"), addPlace);
placesRouter.put("/update/:id", upload.single("image"), updatePlace);
placesRouter.delete("/delete/:id", deletePlace);
