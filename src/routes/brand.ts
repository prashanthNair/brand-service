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
     *             type: object
     *             properties:
     *               DomainID:
     *                 type: string
     *                 description: The Id assigned to specific domian.
     *               CategoryId:
     *                 type: string
     *                 description: The Id assigned to specific category.
     *               Category:
     *                 type: string
     *                 description: The categoryname.
     *               BrandName:
     *                 type: string
     *                 description: The brand's name.
     *               About:
     *                 type: string
     *                 description: The additional details about the brand.
     *               Country:
     *                 type: string
     *                 description: The country's name where brand operates.
     *               EmailId:
     *                 type: string
     *                 description: The brand's official email.
     *               PhoneNumber:
     *                 type: number
     *                 description: Official phone number.
     *               CountryCode:
     *                 type: string
     *                 description: The country code for the phone number.
     *               Street:
     *                 type: string
     *                 description: The street's name.
     *               City:
     *                 type: string
     *                 description: The city's name.
     *               State:
     *                 type: string
     *                 description: The state's name.
     *               PostalCode:
     *                 type: string
     *                 description: The Postal code of the place.
     *               Username:
     *                 type: string
     *                 description: The brand's official man's name.
     *               Designation:
     *                 type: string
     *                 description: The official mans's position.
     *               UserEmailId:
     *                 type: string
     *                 description: The official mans's email id.
     *               RegBusinessName:
     *                 type: string
     *                 description: The Registered business name.
     *               RegisteredType:
     *                 type: string
     *                 description: The type of registration.
     *               AccountPassword:
     *                 type: string
     *                 description: The Password for this account.
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
     *             type: object
     *             properties:
     *               BrandID:
     *                 type: string
     *                 description: The Id assigned to specific brand.
     *               DomainID:
     *                 type: string
     *                 description: The Id assigned to specific domian.
     *               CategoryId:
     *                 type: string
     *                 description: The Id assigned to specific category.
     *               Category:
     *                 type: string
     *                 description: The categoryname.
     *               BrandName:
     *                 type: string
     *                 description: The brand's name.
     *               About:
     *                 type: string
     *                 description: The additional details about the brand.
     *               Country:
     *                 type: string
     *                 description: The country's name where brand operates.
     *               EmailId:
     *                 type: string
     *                 description: The brand's official email.
     *               PhoneNumber:
     *                 type: number
     *                 description: Official phone number.
     *               CountryCode:
     *                 type: string
     *                 description: The country code for the phone number.
     *               Street:
     *                 type: string
     *                 description: The street's name.
     *               City:
     *                 type: string
     *                 description: The city's name.
     *               State:
     *                 type: string
     *                 description: The state's name.
     *               PostalCode:
     *                 type: string
     *                 description: The Postal code of the place.
     *               Username:
     *                 type: string
     *                 description: The brand's official man's name.
     *               Designation:
     *                 type: string
     *                 description: The official mans's position.
     *               UserEmailId:
     *                 type: string
     *                 description: The official mans's email id.
     *               RegBusinessName:
     *                 type: string
     *                 description: The Registered business name.
     *               RegisteredType:
     *                 type: string
     *                 description: The type of registration.
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
     .patch(
         (req: Request, res: Response, next: NextFunction) =>
             brandController.patchBrandUpdate(req, res, next)
     );



  /**
   * @swagger
   * /brand/getalldomains:
   *   get:
   *     summary: Get all Domains.
   *        
   *     responses:
   *       200:
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
   * /getallcategories/{DomainID}:
   *   get:
   *     summary: Get all Categories.      
   *     responses:
   *       200:
   *         description: All Categories successfully retrieved        
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *       400:
   *         $ref: '#/components/responses/BadRequest'
   *       
   *                 
  */

   app
   .route("/api/v1/brand/getallcategories/:DomainID")
   .get(
     (req: Request, res: Response, next: NextFunction) =>
     brandController.getAllCategory(req, res, next)
   );

  /**
   * @swagger
   * /getallproductcategories/{CategoryId}:
   *   get:
   *     summary: Get all Product Categories.       
   *     responses:
   *       200:
   *         description: All Product Categories successfully retrieved        
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *       400:
   *         $ref: '#/components/responses/BadRequest'
   *       
   *                 
  */

   app
   .route("/api/v1/brand/getallproductcategories/:CategoryId")
   .get(
     (req: Request, res: Response, next: NextFunction) =>
     brandController.getAllProductCategory(req, res, next)
   );



  /**
   * @swagger
   * /brand/getallsubscriptions:
   *   get:
   *     summary: Get all Subscriptions.
   *        
   *     responses:
   *       200:
   *         description: All Subscriptions successfully retrieved        
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *       400:
   *         $ref: '#/components/responses/BadRequest'
   *       
   *                 
  */

   app
   .route("/api/v1/brand/getallsubscriptions")
   .get(
     (req: Request, res: Response, next: NextFunction) =>
     brandController.getAllSubscriptions(req, res, next)
   );   
  
}
