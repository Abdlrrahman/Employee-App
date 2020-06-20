const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    picture: String,
    salary: String,
    position: String,
    Employer: [
        { type: Schema.Types.ObjectId, ref: 'employer' }
    ]
}, { timestamps: true });

mongoose.model("employee", EmployeeSchema)