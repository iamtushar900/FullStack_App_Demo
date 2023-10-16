const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  gender: String,
  phone: String,
  altPhone: String,
  dob: String,
  graduation: {
    stream: String,
    yop: String,
    securedMark: String,
  },
  postgraduation: {
    stream: String,
    yop: String,
    securedMark: String,
  },
  course: String,
  address: [{ type: String }],
  payment: {
    paid: Number,
    remaining: Number,
  },
  password: String,
  confirmpassword: String,
  
});

module.exports = studentSchema;
