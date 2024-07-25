import express from "express";
import Company from "../modals/Company.js";

export const getCompanyData = async (req,res) => {
    try {
        console.log("backend called")
        const data = await Company.find({});
        console.log("Data retrieved", data);
       // JSON.stringify(data)
        // const ans= JSON.stringify(data);
        res.status(200).json(data);
       
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};