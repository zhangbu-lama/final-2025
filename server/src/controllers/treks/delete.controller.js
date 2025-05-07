<<<<<<< HEAD
import { isValidObjectId } from "mongoose";
import {
    asyncHandler,
    SuccessResponse,
    ErrorResponse,
} from "../../lib/index.js";
import { Trek } from "../../models/trek.model.js";
export const deleteTrek = asyncHandler(async (req, res) => {
    const trekId = req.params.id;

    if (!isValidObjectId(trekId)) {
        throw new ErrorResponse(400, 6000, "trek id is not valid");
    }

    const trek = await Trek.findByIdAndDelete(trekId);

    return res
        .status(200)
        .json(new SuccessResponse(200, "trek deleted succesfully", trek));
=======
import { asyncHandler, SuccessResponse } from "../../lib/index.js";
export const deleteTrek = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(
            new SuccessResponse(200, "desired action done succesfully", null),
        );
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
});
