import mongoose from "mongoose";

const trekSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        difficulty: {
            type: String,
        },
<<<<<<< HEAD
        place: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Place",
        },
=======
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
        duration: {
            type: String,
        },
        overview: {
            type: String,
        },
        max_elevation: {
            type: String,
        },
        best_season: {
            type: String,
        },
        contact_number: {
            type: Number,
        },
        contact_email: {
            type: String,
        },
        rating: {
            type: Number,
        },
        reviews: {
            type: Number,
        },
        images: {
            type: [String],
        },
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

export const Trek = mongoose.model("Trek", trekSchema);
