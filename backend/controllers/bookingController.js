import Booking from "../models/Booking.js";
import mongoose from "mongoose";

// Create new booking
export const createBooking = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();

    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (err) {
    console.error("Error in createBooking:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

// Get single booking
export const getBooking = async (req, res) => {
  const id = req.params.id;

  // Check if ID is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid booking ID" });
  }

  try {
    const book = await Booking.findById(id);
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }

    res.status(200).json({
      success: true,
      message: "Successful",
      data: book,
    });
  } catch (err) {
    console.error("Error in getBooking:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

// Get all bookings (admin only)
export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();

    res.status(200).json({
      success: true,
      message: "Successful",
      data: books,
    });
  } catch (err) {
    console.error("Error in getAllBooking:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};
