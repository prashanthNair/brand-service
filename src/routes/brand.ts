import { Request, Response, NextFunction } from "express";
import { BrandController } from "../controllers/brandController";



export const brandRoutes = (
    app,
    brandController: BrandController = BrandController.getInstance(),
) => {

    /**
     * @swagger
     * /brand/registration:
     *   post:
     *     summary: Brand Registraion.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Brand'   
     *     responses:
     *       201:
     *         description: Signup Page successfully retrieved        
     *       500:
     *         $ref: '#/components/responses/FailureError'
     *       400:
     *         $ref: '#/components/responses/BadRequest'
     *       
     *                 
    */

    app
        .route("/api/v1/brand/registration")
        .post(
            (req: Request, res: Response, next: NextFunction) =>
                brandController.postBrandRegister(req, res, next)
        );
}