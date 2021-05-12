import { Request, Response, NextFunction } from "express";
import { SignupController } from "../controllers/OnboardingController"; 


const signupRoutes = (
  app,
  signupController: SignupController = SignupController.getInstance(), 
) => { 
  
/**
 * @swagger
 * /api/v1/onboarding:
 *   post:
 *     summary: Register a brand.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Brand registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       500:
 *         $ref: '#/components/responses/FailureError'
 *                 
*/
app
.route("/api/v1/onboarding")
.post(
  async (req: Request, res: Response, next: NextFunction) =>
    await signupController.postSignup(req, res, next)
);
}
  export default signupRoutes