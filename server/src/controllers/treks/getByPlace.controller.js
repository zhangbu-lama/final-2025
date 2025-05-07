<<<<<<< HEAD
import { isValidObjectId } from "mongoose";
import {
    asyncHandler,
    ErrorResponse,
    SuccessResponse,
} from "../../lib/index.js";

import { Trek } from "../../models/index.js";

export const getTreksByPlaceId = asyncHandler(async (req, res) => {
    const placeId = req.params.id;

    if (!isValidObjectId(placeId)) {
        throw new ErrorResponse(400, 6000, "invalid place id");
    }

    const trek = await Trek.find({ place: placeId });

    if (!trek) {
        throw new ErrorResponse(404, 6004, "trek not found");
    }

    return res
        .status(200)
        .json(new SuccessResponse(200, "trek fetch by place sucessful", trek));
=======
import { asyncHandler, SuccessResponse } from "../../lib/index.js";
export const getTreksByPlaceId = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(
            new SuccessResponse(200, "desired action done succesfully", null),
        );
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
});
