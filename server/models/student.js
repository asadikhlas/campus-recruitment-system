const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
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

  name: {
    type: String,
    required: true,
    maxlength: 100
  },

  lastname: {
    type: String,
    required: true,
    maxlength: 100
  },

  role: {
    type: String, 
    required: true
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };
