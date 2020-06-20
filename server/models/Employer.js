const mongoose = require('mongoose');

const EmployerSchema = new mongoose.Schema({
    username: String,
    email: String,
    image: String,
    hash: String,
    salt: String
}, { timestamps: true });

mongoose.model('employer', EmployerSchema);