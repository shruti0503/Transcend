import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true, // Assuming id is required
        unique: true, // Assuming id should be unique
    },
    entity: {
        type: String,
        required: true,
    },
    sector: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, 
    },
    incorporation: {
        type: Date,
        required: true,
    },
    address: {
        type: String,
        default: null,
    },
    revenue_million: {
        type: Number,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    is_verified: {
        type: Boolean,
        required: true,
    },
}, { collection: 'CompanyData' });

const Company = mongoose.model("Company", CompanySchema);

export default Company;