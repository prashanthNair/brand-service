import { Request, Response, NextFunction } from "express";
import { ProductController } from "../controllers/productController";

const productRoute = (
    app,
    productController: ProductController = ProductController.getInstance(),
) => {

    /**
    * @swagger
    * /brand/{brandId}/products:
    *   post:
    *     summary: Reginster new product under a brand.
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Post_Product'
    *     responses:
    *       201:
    *         description: Login Page successfully retrieved
    *       500:
    *         $ref: '#/components/responses/FailureError'
    *       400:
    *         $ref: '#/components/responses/BadRequest'
    *
    *
    */
    app
        .route('/api/v1/brand/:brandId/products')
        .post(
            async (req: Request, res: Response, next: NextFunction) => {
                await productController.postProducts(req, res, next);
            })

    /**
    * @swagger
    * /brand/{brandId}/products:
    *   get:
    *     summary: Get details of all products associated with the brand.
    *     parameters:
    *       - in: path
    *         name: brandId
    *         required: true
    *         description: brandId of the brand
    *         schema:
    *           type: string
    *       - in: query
    *         name: status
    *         required: true
    *         description: status of the products "Active" or"Inactive"
    *         schema:
    *           type: string
    *     responses:
    *       201:
    *         description: Login Page successfully retrieved
    *       500:
    *         $ref: '#/components/responses/FailureError'
    *       400:
    *         $ref: '#/components/responses/BadRequest'
    *
    *
    */
    app
        .route('/api/v1/brand/:brandId/products')
        .get(
            async (req: Request, res: Response, next: NextFunction) => {
                await productController.getAllBrandProducts(req, res, next);
            })

    /**
    * @swagger
    * /brand/{brandId}/products/{productId}:
    *   get:
    *     summary: Get details of specific product.
    *     parameters:
    *       - in: path
    *         name: brandId
    *         required: true
    *         description: brandId of the brand
    *         schema:
    *           type: string
    *       - in: path
    *         name: productId
    *         required: true
    *         description: productId of the product
    *         schema:
    *           type: string
    *     responses:
    *       201:
    *         description: Login Page successfully retrieved
    *       500:
    *         $ref: '#/components/responses/FailureError'
    *       400:
    *         $ref: '#/components/responses/BadRequest'
    *
    *
    */
    app
        .route('/api/v1/brand/:brandId/products/:productId')
        .get(
            async (req: Request, res: Response, next: NextFunction) => {
                await productController.getBrandProduct(req, res, next);
            })
}

export default productRoute;