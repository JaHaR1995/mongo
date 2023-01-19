

const mongoose = require('mongoose');

const studentShema = mongoose.Schema({
    name: String,
    phone: String,
    age: Number
});

const Student = mongoose.model('student', studentShema)

module.exports = Student






