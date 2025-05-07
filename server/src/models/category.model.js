import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
<<<<<<< HEAD
            required: true,
=======
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
        },
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

export const Categorie = mongoose.model("Categorie", categorySchema);
