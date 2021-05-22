import { Request, Response, NextFunction } from "express";
import { ProductController } from "../controllers/productController";

const productRoute = (
    app,
    productController: ProductController = ProductController.getInstance(),
) => {

    /**
    * @swagger
    * /api/v1/products:
    *   post:
    *     summary: Create entry to priduct table.
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
        .route('/api/v1/products')
        .post(
            async (req: Request, res: Response, next: NextFunction) => {
                await productController.postProducts(req, res, next);
            })

    /**
    * @swagger
    * /api/v1/products:
    *   get:
    *     summary: Get details of all priducts.
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Get_Products'
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
        .route('/api/v1/products')
        .get(
            async (req: Request, res: Response, next: NextFunction) => {
                await productController.getProducts(req, res, next);
            })

    /**
    * @swagger
    * /api/v1/products/{productId}:
    *   get:
    *     summary: Get details of specific product.
    *     parameters:
    *       - in: path
    *         name: productId
    *         required: true
    *         description: Id of the product
    *         schema:
    *           type: integer
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Get_Product'
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
        .route('/api/v1/products/:productId')
        .get(
            async (req: Request, res: Response, next: NextFunction) => {
                await productController.getProduct(req, res, next);
            })
}

export default productRoute;