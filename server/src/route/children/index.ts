import express from "express";
import { getCityState } from "../../controller/children";
const router = express.Router();

router.get("/city-state/:zipcode", getCityState);

export default router;
