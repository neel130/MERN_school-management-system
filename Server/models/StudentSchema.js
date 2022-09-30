const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    class: {
        type: String
    },
    age: {
        type: Number
    },
    school: {
        type: String
    }

})

const student = mongoose.model("student", StudentSchema);

module.exports = student;