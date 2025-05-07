import { isValidObjectId } from "mongoose";
import {
    asyncHandler,
    SuccessResponse,
    ErrorResponse,
} from "../../lib/index.js";
import { Place } from "../../models/place.model.js";
export const updatePlace = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const name = req.body?.name;
    const location = req.body?.location;
    const description = req.body?.description;
    const category = req.body?.category;
    const relatedName = req.body?.related_name;
    const image = req.file;
    const timeToTravel = req.body?.time_to_travel;
<<<<<<< HEAD

    if (!name) {
        return res
            .status(400)
            .json(new ErrorResponse(400, 6000, "Name is required"));
    }

    if (!location) {
        return res
            .status(400)
            .json(new ErrorResponse(400, 6001, "Location is required"));
    }
    if (!description) {
        return res
            .status(400)
            .json(new ErrorResponse(400, 6002, "Description is required"));
    }
    if (!category) {
        return res
            .status(400)
            .json(new ErrorResponse(400, 6003, "Category is required"));
    }
    if (!relatedName) {
        return res
            .status(400)
            .json(new ErrorResponse(400, 6004, "Related name is required"));
    }
    if (!timeToTravel) {
        return res
            .status(400)
            .json(new ErrorResponse(400, 6005, "Time to travel is required"));
    }
=======
    const isImageUpdated = req.body?.is_image_updated ?? false;

    // Validate required fields
    if (
        !name ||
        !location ||
        !description ||
        !category ||
        !relatedName ||
        !image ||
        !timeToTravel
    ) {
        return res
            .status(400)
            .json(new ErrorResponse(400, 6000, "All fields are required"));
    }
    // Validate image type
    const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedImageTypes.includes(image.mimetype)) {
        return res
            .status(400)
            .json(new ErrorResponse(400, 6001, "Invalid image type"));
    }
    // Validate image size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (image.size > maxSize) {
        return res
            .status(400)
            .json(new ErrorResponse(400, 6002, "Image size exceeds 5MB limit"));
    }
    // Check if the place exists
>>>>>>> a9a2883aa685ca9314235678934306724487af7f

    if (!isValidObjectId(id)) {
        return res
            .status(400)
            .json(new ErrorResponse(400, 6003, "Invalid place ID"));
    }

    const place = await Place.findById(id);

    if (!place) {
        return res
            .status(404)
            .json(new ErrorResponse(404, 6004, "Place not found"));
    }

    // Update the place
    place.name = name;
    place.location = location;
    place.description = description;
    place.category = category;
    place.related_name = relatedName;
    place.time_to_travel = timeToTravel;
<<<<<<< HEAD
    place.image = image ? image.filename : place.image;
=======
    if (isImageUpdated) {
        place.image = image.path;
    }
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
    await place.save();

    return res
        .status(200)
        .json(new SuccessResponse(200, "place updated", place));
});
