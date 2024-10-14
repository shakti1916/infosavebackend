import { sendInfoModel } from "../model/sendInfoModel.js";

export const SendInfoController = async (req, res) => {
  try {
    const { email, username, message } = req.body;

    // Input validation
    if (!email) {
      throw new Error("Please provide email");
    }
    if (!username) {
      throw new Error("Please provide contact");
    }
    if (!message) {
      throw new Error("Please provide message");
    }

    // Create a new record with the provided information
    const newInfo = new sendInfoModel({
      email,
      username,
      message
    });

    // Save the information to the database
    const savedInfo = await newInfo.save();

    // Send a successful response with the saved data
    res.status(200).json({
      data: savedInfo,
      success: true,
      error: false,
      message: "Data saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};
