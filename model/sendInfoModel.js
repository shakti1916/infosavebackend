import mongoose from "mongoose";
const sendInfoSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt:{
    type:Date,
    default:Date.now()

  }

});

export const sendInfoModel = mongoose.model("SendInfo",sendInfoSchema)



