import express from "express";
import Company from "../modals/Company.js";

export const getCompanyData = async () => {
    try {
        const data = await Company.find({});
       // res.json(data);
        console.log("Data retrieved", data);
    } catch (err) {
        console.log(err);
       // res.status(500).json({ message: err.message });
    }
};