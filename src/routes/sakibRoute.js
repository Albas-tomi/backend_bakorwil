import express from "express";
import {
  createSakib,
  deleteSakib,
  getSakib,
  getSakibById,
  updateSakib,
} from "../controller/sakibController.js";

const router = express.Router();

// ROUTE GET ALL SAKIB
router.get("/sakib", getSakib);
// ROUTE GET SAKIB BY ID
router.get("/sakib/:id", getSakibById);
// ROUTE CREATE SAKIB
router.post("/sakib", createSakib);
// ROUTE EDIT SAKIB
router.patch("/sakib/:id", updateSakib);
// ROUTE DELETE SAKIB
router.delete("/sakib/:id", deleteSakib);

export default router;
