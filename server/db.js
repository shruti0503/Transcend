import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let isConnected = false;

const connection = () => {
    const CONNECTION_URL = process.env.MONGO_URL;

    if (isConnected) {
        return Promise.resolve(); 
    }

    return mongoose.connect(CONNECTION_URL)
        .then(() => {
            isConnected = true;
            console.log('MongoDB connected');
        })
        .catch((error) => {
            console.error('MongoDB connection error:', error.message);
            throw error; 
        });
};

export default connection;