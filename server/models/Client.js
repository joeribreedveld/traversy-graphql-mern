const mongoose = require("mongoose");

// Create Schema
const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

// Create Model from Schema and export it
module.exports = mongoose.model("Client", ClientSchema);
