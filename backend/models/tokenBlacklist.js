import mongoose from "mongoose";

const TokenBlacklistSchema = new mongoose.Schema({
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 3600 } // auto-remove after 1h
});

export default mongoose.model("TokenBlacklist", TokenBlacklistSchema);
