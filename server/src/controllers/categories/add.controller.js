import {
    asyncHandler,
    ErrorResponse,
    SuccessResponse,
} from "../../lib/index.js";
import { Categorie } from "../../models/category.model.js";

export const addCategory = asyncHandler(async (req, res) => {
    const name = req.body?.name ?? "";
    const description = req.body?.description ?? "";
<<<<<<< HEAD
    const image = req.file ?? null;
=======
    const image = req.file ? req.file.filename : null;
>>>>>>> a9a2883aa685ca9314235678934306724487af7f

    if (!name) {
        throw new ErrorResponse(400, 6000, "name is required");
    }

    if (!description) {
        throw new ErrorResponse(400, 6000, "description is required");
    }

<<<<<<< HEAD
    if (!image) {
        throw new ErrorResponse(400, 6000, "image is required");
    }
=======
    // if (!image) {
    //     throw new ErrorResponse(400, 6000, "image is required");
    // }
>>>>>>> a9a2883aa685ca9314235678934306724487af7f

    const category = await Categorie.create({
        name,
        description,
<<<<<<< HEAD
        image:image.filename,
=======
        image,
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
    });
    console.log(category);

    return res.status(200).json(
        new SuccessResponse(200, "category added", {
            ...category,
        }),
    );
});
