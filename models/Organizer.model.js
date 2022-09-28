const mongoose = require("mongoose");

const organizerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  mobile: {
    type: Number,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
    trim: true,
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true,
  },
  //   is_organizer: {
  //     type: Boolean,
  //     default: true,
  //   },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Organizer", organizerSchema);
