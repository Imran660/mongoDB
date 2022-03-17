const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required"
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: "Email is required",
    },
    age: {
        type: Number,
    },
    address: {
        type: String,
    }
},{timestamps:true});

module.exports=mongoose.model("Student",studentSchema)