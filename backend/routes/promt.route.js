import express from "express";
import { sendPromt } from "../controller/promt.controller.js";
import userMiddleware from "../middleware/promt.middlware.js";

const router = express.Router();

router.post("/promt", userMiddleware, sendPromt);

export default router;
