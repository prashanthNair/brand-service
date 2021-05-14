import { Request, Response, NextFunction } from "express";
import { SignupController } from "../controllers/SignupController"; 



const signupRoutes = (
  app,
  signupController: SignupController = SignupController.getInstance(), 
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
       async (req: Request, res: Response, next: NextFunction) =>
       await signupController.postSignup(req, res, next)
    );


/**
 * @swagger
 * /api/v1/user)details:
 *   get:
 *     summary: Show user details.
 *     parameters:
 *       - in: body
 *         name: id
 *         required: true
 *         description: ID of the User account
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         $ref: '#/components/responses/Success'
 *       500:
 *         $ref: '#/components/responses/FailureError'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       
 *                 
*/

app
.route("/api/v1/user_details/:id")
.get(
  async (req: Request, res: Response, next: NextFunction) =>
    await signupController.getUserdetails(req, res, next)
);

// app
// .route("/api/v1/user_update/:id")
// .put(
//   async (req: Request, res: Response, next: NextFunction) =>
//     await signupController.updateUserdetails(req, res, next)
// );

    }
    export default signupRoutes;