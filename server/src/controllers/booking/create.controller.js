import {
    asyncHandler,
    ErrorResponse,
    SuccessResponse,
} from "../../lib/index.js";
import { Booking } from "../../models/index.js";

export const createBooking = asyncHandler(async (req, res) => {
    // Check if the user is an admin
    if (req.user?.role === "admin") {
        throw new ErrorResponse(403, 6008, "Admins are not allowed to create bookings");
    }

    const firstName = String(req.body?.first_name || "").trim();
    const lastName = String(req.body?.last_name || "").trim();
    const email = String(req.body?.email_address || "").trim();
    const phone = String(req.body?.phone || "").trim();
    const startDate = String(req.body?.start_date || "").trim();
    const travelDate = String(req.body?.travel_date || "").trim();
    const groupSize = String(req.body?.group_size || "").trim();
    const destination = String(req.body?.destination || "").trim();
    const specialRequirements = String(req.body?.special_requirements || "").trim();
    const creator = req.user?._id;

    if (!firstName) {
        throw new ErrorResponse(400, 6000, "First name is required");
    }
    if (!lastName) {
        throw new ErrorResponse(400, 6001, "Last name is required");
    }
    if (!email) {
        throw new ErrorResponse(400, 6002, "Email is required");
    }
    if (!phone) {
        throw new ErrorResponse(400, 6003, "Phone number is required");
    }
    if (!startDate) {
        throw new ErrorResponse(400, 6004, "Start date is required");
    }
    if (!travelDate) {
        throw new ErrorResponse(400, 6005, "Travel date is required");
    }
    if (!groupSize) {
        throw new ErrorResponse(400, 6006, "Group size is required");
    }
    if (!destination) {
        throw new ErrorResponse(400, 6007, "Destination is required");
    }

    const booking = await Booking.create({
        creator,
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        start_date: startDate,
        travel_date: travelDate,
        group_size: groupSize,
        destination: destination,
        special_requirements: specialRequirements,
    });

    return res
        .status(201)
        .json(
            new SuccessResponse(200, "Booking created successfully", booking),
        );
});
