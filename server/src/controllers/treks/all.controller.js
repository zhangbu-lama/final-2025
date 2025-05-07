import { asyncHandler, SuccessResponse } from "../../lib/index.js";
<<<<<<< HEAD
import { Trek } from "../../models/index.js";

export const getAllTreks = asyncHandler(async (_, res) => {
    const treks = await Trek.find().populate("place");

    return res
        .status(200)
        .json(new SuccessResponse(200, "fetched all treks succesfully", treks));
=======
export const getAllTreks = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(
            new SuccessResponse(200, "desired action done succesfully", null),
        );
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
});
