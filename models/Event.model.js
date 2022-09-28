const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  event_date: {
    type: Date,
    required: true,
  },
  event_venue: {
    type: String,
    required: true,
  },
  online_participant_limit: {
    type: Number,
    required: true,
  },
  offline_participant_limit: {
    type: Number,
    required: true,
  },
  is_paid: {
    type: Boolean,
    default: false,
  },
  video_link: {
    type: String,
    required: false,
  },
  online_ticket_price: {
    type: String,
    required: false,
  },
  offline_ticket_price: {
    type: String,
    required: false,
  },
  registration_link: {
    type: String,
    required: false,
  },
  event_subject: {
    type: String,
    required: false,
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organizer",
    required: true,
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true,
  },
  is_public: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Event", eventSchema);
