import express from 'express'
import { SendInfoController } from '../controllers/SendInfoController.js';



const router = express.Router();

router.post("/sendInfo",SendInfoController)





export default router;
