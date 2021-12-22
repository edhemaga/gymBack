import express from 'express';

import {postPurchase} from '../controllers/purchases.js';

const router = express.Router();


router.post('/', postPurchase);

export default router;