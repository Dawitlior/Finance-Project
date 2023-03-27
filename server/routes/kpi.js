import express from "express";
import KPI from "../models/KPI.js";
const router = express.Router();

router.get("/kpis", async (request, response) => {
  try {
    //object document mapping
    //odm does the same thing orm does but for nosql database
    const kpis = await KPI.find();
    response.status(200).json(kpis);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});
export default router;
