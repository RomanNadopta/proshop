import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';

import {
  addOrderItems,
  getOrderById,
  getMyOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
  getOrders,
} from '../controllers/orderController.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);

router.route('/mine').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;
