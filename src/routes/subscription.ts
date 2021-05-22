import {Request, Response, NextFunction} from 'express';
import { SubscriptionController } from '../controllers/subscriptionController';

const subscriptionRoute = (
    app,
    subscriptionService: SubscriptionController = SubscriptionController.getInstance()
) => {
    app
    .route("/api/v1/subscriptions") // get all subscriptions....
    .get(
        async (req: Request, res: Response, next: NextFunction) => {
        subscriptionService.getSubscriptions(req, res, next);
        }
    )

    /**
    * @swagger
    * /api/v1/subscriptions:
    *   post:
    *     summary: Insert Subscription details to brand_subscription table.
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
    .route("/api/v1/subscriptions") // get all subscriptions....
    .post(
        async (req: Request, res: Response, next: NextFunction) => {
        subscriptionService.postBrandSubscription(req, res, next);
        }
    )

    /**
    * @swagger
    * /api/v1/subscriptions/{brandId}:
    *   put:
    *     summary: Get Subscription details from subscription table.
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
    .route("/api/v1/subscriptions/:brandId") // get all subscriptions....
    .put(
        async (req: Request, res: Response, next: NextFunction) => {
        subscriptionService.updateBrandSubscription(req, res, next);
        }
    )
}

export default subscriptionRoute;