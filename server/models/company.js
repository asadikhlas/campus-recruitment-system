const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1
  },

  password: {
    type: String,
    required: true,
    minlength: 4
  },

  "Company Name": {
    type: String,
    required: true,
    maxlength: 100
  },

  role: {
    type: String,
    required: true
  }
});

const Company = mongoose.model("Company", companySchema);

module.exports = { Company };
