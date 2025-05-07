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
<<<<<<< HEAD
placesRouter.post("/add", upload.single("place_image"), addPlace);
placesRouter.put("/update/:id", upload.single("place_image"), updatePlace);
=======
placesRouter.post("/add", upload.single("image"), addPlace);
placesRouter.put("/update/:id", upload.single("image"), updatePlace);
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
placesRouter.delete("/delete/:id", deletePlace);
