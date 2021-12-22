import express from 'express';

import {getItems, postItem, getItem} from '../controllers/items.js';

const router = express.Router();

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', postItem);

export default router;