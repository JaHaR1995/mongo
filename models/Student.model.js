const mongoose = require("mongoose");

const studentShema = mongoose.Schema({
  name: String,
  phone: String,
  age: Number,
});

const Student = mongoose.model("Student", studentShema);

module.exports = Student;

