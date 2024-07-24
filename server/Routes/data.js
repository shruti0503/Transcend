import express from 'express'
import { getCompanyData } from '../Controllers/data.js'

const DATArouter=express.Router();
DATArouter.get('/get-data', getCompanyData)

export default DATArouter;