import express from 'express';
import { ProductController } from './controller.product';


const router = express.Router()

router.get("/",ProductController.getProducts)

router.get("/:id", ProductController.getProductById)

router.get('/filter/:filter',ProductController.getProductByFilter)

router.post("/create",ProductController.createProduct)

router.post("/search",ProductController.searchProduct)


export const ProductRoutes = router