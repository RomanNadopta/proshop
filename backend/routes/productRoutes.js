import express from 'express';
import {
  CreateProduct,
  getProducById,
  getProducts,
  updateProduct,
  deleteProduct,
  CreateProductReview,
  getTopProducts,
} from '../controllers/productController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, CreateProduct);

router.route('/top').get(getTopProducts);

router
  .route('/:id')
  .get(getProducById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

router.route('/:id/reviews').post(protect, CreateProductReview);

export default router;
