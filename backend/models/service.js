// backend/models/Service.js
import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  category: { type: String, required: true },  // e.g., Appliance, Beauty
  name: { type: String, required: true },      // e.g., Water Purifier
  image: { type: String, required: true },     // image URL
  link: { type: String },                      // optional service link
  description: { type: String },               // optional
});

export default mongoose.model("Service", ServiceSchema);
