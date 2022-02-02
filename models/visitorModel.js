const mongoose = require("mongoose");
const validator = require("validator");
const visitorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your name"],
  },
  mobile: {
    type: Number,
    required: [true, "Please Enter your mobile number"],
  },
  email: {
    type: String,
    required: [true, "Please Enter your Email ID"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email ID"],
  },
  purpose: {
    type: String,
    required: [true, "Please Enter Purpose of visit"],
  },
  employee: {
    type: String,
    required: [true, "Please Choose Employee Name"],
  },
  pic: {
    type: String,
    required: [true, "Please Upload your picture"],
    default:
      "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1631444571/user_1_qy7hlx.png",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Visitor", visitorSchema);
