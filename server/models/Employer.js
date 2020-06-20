const mongoose = require('mongoose');

const EmployerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    last_name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    picture: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 1024
    },
    company: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
}, { timestamps: true });

mongoose.model('employer', EmployerSchema);