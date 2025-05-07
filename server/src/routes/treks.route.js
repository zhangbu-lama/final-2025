import express from "express";

import {
    addTrek,
    getAllTreks,
    getTrekById,
    deleteTrek,
    getTreksByPlaceId,
    updateTrek,
} from "../controllers/index.js";
<<<<<<< HEAD
import { upload } from "../middlewares/index.js";
=======
>>>>>>> a9a2883aa685ca9314235678934306724487af7f

export const treksRouter = express.Router();

treksRouter.get("/all", getAllTreks);
<<<<<<< HEAD
treksRouter.post("/add", upload.array("images"), addTrek);
treksRouter.get("/:id", getTrekById);
treksRouter.get("/place/:id", getTreksByPlaceId);
treksRouter.put("/update/:id", upload.array("images"), updateTrek);
treksRouter.delete("/delete/:id", deleteTrek);
=======
treksRouter.get("/:id", getTrekById);
treksRouter.get("/place/:id", getTreksByPlaceId);
treksRouter.post("/add", addTrek);
treksRouter.delete("/delete/:id", deleteTrek);
treksRouter.patch("/udpate/:id", updateTrek);
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
