import { asyncHandler, SuccessResponse } from "../../lib/index.js";
import { Place } from "../../models/place.model.js";
export const getAllPlaces = asyncHandler(async (_, res) => {
<<<<<<< HEAD
    const places = await Place.find().populate("category");
=======
    const places = await Place.find();
>>>>>>> a9a2883aa685ca9314235678934306724487af7f

    return res
        .status(200)
        .json(new SuccessResponse(200, "all places fetched", places));
});
