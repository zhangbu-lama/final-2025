import {
    asyncHandler,
    SuccessResponse,
    ErrorResponse,
} from "../../lib/index.js";
import { Place } from "../../models/place.model.js";
export const addPlace = asyncHandler(async (req, res) => {
    // Log the incoming request data
    console.log('Received request body:', req.body);
    console.log('Received file:', req.file);

    const name = req.body?.name;
    const location = req.body?.location;
    const description = req.body?.description;
    const category = req.body?.category;
    const relatedName = req.body?.related_name;
    const image = req.file;
    const timeToTravel = req.body?.time_to_travel;

    // Log extracted values
    console.log('Extracted values:', {
        name,
        location,
        description,
        category,
        relatedName,
        timeToTravel,
        hasImage: !!image
    });

    // Validate required fields
    if (
        !name ||
        !location ||
        !description ||
        !category ||
        !relatedName ||
        !timeToTravel
    ) {
        // Log which fields are missing
        const missingFields = {
            name: !name,
            location: !location,
            description: !description,
            category: !category,
            relatedName: !relatedName,
            timeToTravel: !timeToTravel
        };
        console.log('Missing fields:', missingFields);

        return res
            .status(400)
            .json(new ErrorResponse(400, 6000, "Required fields are missing. Missing fields: " + 
                  Object.entries(missingFields)
                    .filter(([_, isMissing]) => isMissing)
                    .map(([field]) => field)
                    .join(', ')
            ));
    }

    // Validate image if provided
    if (image) {
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
    }

    const place = await Place.create({
        name,
        location,
        description,
        category,
        related_name: relatedName,
        image: image ? image.path : undefined,
        time_to_travel: timeToTravel,
    });

    return res
        .status(200)
        .json(new SuccessResponse(200, "place created", place));
});
