const mongoose  = require("mongoose");

const leaderSchema = mongoose.Schema({
  Email: { type: String, required: true, unique: true },
  Score: { type: Number, default: 0 }
});


const LeaderModel = mongoose.model("Leaders", leaderSchema , "answers");

module.exports = LeaderModel;