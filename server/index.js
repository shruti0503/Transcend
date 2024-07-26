import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connection from './db.js';
import DATArouter from './Routes/data.js'; 
import { getCompanyData } from './Controllers/data.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());



// app.use('/',DATArouter)

app.use("/", (req, res) => {
  res.json({ message: "Hello Vercel" });
});


connection().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
      //getCompanyData();

    });
  });