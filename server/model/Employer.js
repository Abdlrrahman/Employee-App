const mongoose = require('mongoose');

const EmployerSchema = new mongoose.Schema({
    first_name: {
        String,
        required: true,
        min: 6,
        max: 255
    },
    last_name: {
        String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        String,
        required: true,
        min: 6,
        max: 255
    },
    picture: {
        type: String,
        required: true
    },
    password: {
        String,
        required: true,
        min: 8,
        max: 1024
    },
    company: {
        String,
        required: true,
        min: 2,
        max: 255
    },
}, { timestamps: true });

mongoose.model('employer', EmployerSchema);