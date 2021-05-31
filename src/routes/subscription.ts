import { Request, Response, NextFunction } from 'express';
import { SubscriptionController } from '../controllers/subscriptionController';

const subscriptionRoute = (
    app,
    subscriptionService: SubscriptionController = SubscriptionController.getInstance()
) => {

    /**
    * @swagger
    * /api/v1/subscriptions/{subscriptionId}:
    *   get:
    *     summary: Get particular subscription details.
    *     parameters: 
    *       - in: path
    *         name: subscriptionId
    *         required: true
    *         description: subcriptionId of subscription
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
    */
    app
        .route('/api/v1/subscriptions/:subscriptionId')
        .get((req: Request, res: Response, next: NextFunction) => {
            subscriptionService.getMasterSubscriptions(req, res, next);
        })

    /**
    * @swagger
    * /api/v1/brand/{brandId}/subscriptions:
    *   get:
    *     summary: Get all subscriptions associated with the brand.
    *     parameters: 
    *       - in: path
    *         name: brandId
    *         required: true
    *         description: brandId of the brand
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
    */
    app
        .route("/api/v1/brand/:brandId/subscriptions")
        .get(
            async (req: Request, res: Response, next: NextFunction) => {
               await subscriptionService.getBrandSubscriptions(req, res, next);
            }
        );


    /**
    * @swagger
    * /api/v1/brand/{brandId}/subscriptions:
    *   post:
    *     summary: Insert Subscription details to brand_subscription table.
    *     parameters: 
    *       - in: path
    *         name: brandId
    *         required: true
    *         description: brandId of the brand
    *         schema:
    *           type: string
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Post_Brand_Subscriptions'
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
        .route("/api/v1/brand/:brandId/subscriptions") 
        .post(
            async (req: Request, res: Response, next: NextFunction) => {
                await subscriptionService.postBrandSubscription(req, res, next);
            }
        );

    /**
    * @swagger
    * /api/v1/brand/{brandId}/subscriptions/{subscriptionId}:
    *   put:
    *     summary: Update subscription details of a brand from brand_subscription table.
    *     parameters: 
    *       - in: path
    *         name: brandId
    *         required: true
    *         description: brandId of the brand
    *         schema:
    *           type: string
    *       - in: path
    *         name: subscriptionId
    *         required: true
    *         description: subscriptionId of subscribing service
    *         schema:
    *           type: string
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Put_Brand_Subscriptions'
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
        .route("/api/v1/brand/:brandId/subscriptions/:subscriptionId") // get all subscriptions....
        .put(
            async (req: Request, res: Response, next: NextFunction) => {
                await subscriptionService.updateBrandSubscription(req, res, next);
            }
        );
}

export default subscriptionRoute;