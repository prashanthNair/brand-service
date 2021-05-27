import { Request, Response, NextFunction } from "express";
import { format } from "path";
import { AuthController } from "../controllers/authController";



const authRoutes = (
  app,
  authController: AuthController = AuthController.getInstance(),
) => {

  /**
   * @swagger
   * /:
   *   get:
   *     summary: Login Page.
   *        
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
    .route("/")
    .get(
      (req: Request, res: Response, next: NextFunction) =>
        res.send("Welcome to Migobucks Brand Services")
    );

  /**
   * @swagger
   * /api/v1/auth/register:
   *   post:
   *     summary: Register a user.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/User'
   *     responses:
   *       201:
   *         description: User registered successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/SuccessResponse'
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *                 
  */
  app
    .route("/api/v1/auth/register")
    .post(
      async (req: Request, res: Response, next: NextFunction) =>
        await authController.postUser(req, res, next)
    );

  
  /**
   * @swagger
   * /api/v1/auth/user/{email}:
   *   post:
   *     summary: Show buddy user details.
   *     parameters:
   *       - in: path
   *         name: email
   *         required: true
   *         description: Email ID of the buddy user account
   *         schema:
   *           type: string
   *       - in: path
   *         name: password
   *         required: true
   *         description: Password of the buddy user account
   *         schema:
   *           type: string
   *           
   *     responses:
   *       201:
   *         description: Buddy user details successfully retrieved
   *         content:
   *           application/json:
   *             schema:
   *               allOf:
   *                 - $ref: '#/components/schemas/SuccessResponse'
   *                 - type: object
   *                   properties:
   *                     data:
   *                       type: object
   *                       properties:
   *                         email:
   *                           type: string
   *                           description: Email of the Valid user
   *                           example: buddy@migobucks.com
   *               
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *       400:
   *         $ref: '#/components/responses/BadRequest'
   *       
   *                 
  */

  /**
   * @swagger
   * /api/v1/auth/user/{email}/{password}:
   *   get:
   *     summary: Show buddy user details.
   *     parameters:
   *       - in: path
   *         name: email
   *         required: true
   *         description: Email ID of the buddy user account
   *         schema:
   *           type: string
   *       - in: path
   *         name: password
   *         required: true
   *         description: Password of the buddy user account
   *         schema:
   *           type: string
   *           
   *     responses:
   *       201:
   *         description: Buddy user details successfully retrieved
   *         content:
   *           application/json:
   *             schema:
   *               allOf:
   *                 - $ref: '#/components/schemas/SuccessResponse'
   *                 - type: object
   *                   properties:
   *                     data:
   *                       type: object
   *                       properties:
   *                         email:
   *                           type: string
   *                           description: Email of the Valid user
   *                           example: buddy@migobucks.com
   *               
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *       400:
   *         $ref: '#/components/responses/BadRequest'
   *       
   *                 
  */


  app
    .route("/api/v1/auth/user/:email")
    .post(
      async (req: Request, res: Response, next: NextFunction) =>
        await authController.getdetails(req, res, next)
    );

  /**
   * @swagger
   * /api/v1/auth/login/{email}/{password}:
   *   get:
   *     summary: Login a buddy user.
   *     parameters:
   *       - in: path
   *         name: email
   *         required: true
   *         description: Email ID of the buddy user
   *         schema:
   *           type: string
   *       - in: path
   *         name: password
   *         required: true
   *         description: password of the buddy user account
   *         schema:
   *           type: string
   *           
   *     responses:
   *       201:
   *         description: Buddy user login successfully
   *         content:
   *           application/json:
   *             schema:
   *               allOf:
   *                 - $ref: '#/components/schemas/SuccessResponse'
   *                 - type: object
   *                   properties:
   *                     data:
   *                       type: object
   *                       properties:
   *                         email:
   *                           type: string
   *                           description: Email of the successfully logedin user
   *                           example: buddy@migobucks.com
   *               
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *       400:
   *         $ref: '#/components/responses/BadRequest'
   *       
   *                 
  */

  app
    .route("/api/v1/auth/login/:email/:password")
    .get(
      async (req: Request, res: Response, next: NextFunction) =>
        await authController.login(req, res, next)
    );
};

export default authRoutes;
