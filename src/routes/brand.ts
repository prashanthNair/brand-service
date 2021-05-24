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

    /**
     * @swagger
     * /brand/update:
     *   post:
     *     summary: Brand information Updation.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Brand'   
     *     responses:
     *       201:
     *         description: Updation successfully retrieved        
     *       500:
     *         $ref: '#/components/responses/FailureError'
     *       400:
     *         $ref: '#/components/responses/BadRequest'
     *       
     *                 
    */

     app
     .route("/api/v1/brand/update")
     .post(
         (req: Request, res: Response, next: NextFunction) =>
             brandController.patchBrandUpdate(req, res, next)
     );



  /**
   * @swagger
   * /:
   *   get:
   *     summary: Get all Domains.
   *        
   *     responses:
   *       201:
   *         description: All domains successfully retrieved        
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *       400:
   *         $ref: '#/components/responses/BadRequest'
   *       
   *                 
  */

   app
   .route("/api/v1/brand/getalldomains")
   .get(
     (req: Request, res: Response, next: NextFunction) =>
     brandController.getAllDomains(req, res, next)
   );
   
  /**
   * @swagger
   * /:
   *   get:
   *     summary: Get all Categories.
   *        
   *     responses:
   *       201:
   *         description: All Categories successfully retrieved        
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *       400:
   *         $ref: '#/components/responses/BadRequest'
   *       
   *                 
  */

   app
   .route("/api/v1/brand/getallcategory")
   .get(
     (req: Request, res: Response, next: NextFunction) =>
     brandController.getAllCategory(req, res, next)
   );



  /**
   * @swagger
   * /:
   *   get:
   *     summary: Get all Product categories.
   *        
   *     responses:
   *       201:
   *         description: Product Categories successfully retrieved        
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *       400:
   *         $ref: '#/components/responses/BadRequest'
   *       
   *                 
  */

   app
   .route("/api/v1/brand/getallproductcategory")
   .get(
     (req: Request, res: Response, next: NextFunction) =>
     brandController.getAllProductCategory(req, res, next)
   );

  
}