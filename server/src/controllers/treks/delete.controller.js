import { asyncHandler, SuccessResponse } from "../../lib/index.js";
export const deleteTrek = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(
            new SuccessResponse(200, "desired action done succesfully", null),
        );
});
