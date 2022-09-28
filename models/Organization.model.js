const mongoose = require("mongoose");

const organizationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date_of_establishment: {
    type: Date,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Organization", organizationSchema);
