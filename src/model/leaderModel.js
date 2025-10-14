const mongoose  = require("mongoose");

const leaderSchema = mongoose.Schema({
  Email: { type: String, required: true, unique: true },
  Score: { type: Number, default: 0 }
});


const LeaderModel = mongoose.model("Answers", leaderSchema );

module.exports = LeaderModel;