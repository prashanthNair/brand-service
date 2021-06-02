import { Request, Response, NextFunction } from "express";
import { BrandController } from "../controllers/brandController";



export const brandRoutes = (
  app,
  brandController: BrandController = BrandController.getInstance()

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
   *               DomianID:
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
   *               DomianID:
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
 *  @swagger
 * 
 * 
 *  
 *  /brand/{brandId}/kyc:
 *      post:
 *          summary: Inserting new entry to kyc_details table
 *          description: Inserting Brand Kyc details
 *          parameters:
 *                - in: path
 *                  name: brandId
 *                  required: true
 *                  description: BrandId of the Brand
 *                  schema:
 *                      type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          properties:
 *                              kycNumber:
 *                                  type: string
 *                                  description: Kyc number of the user
 *                              kycType:
 *                                  type: string
 *                                  description: Type of user Kyc
 *                              kycName:
 *                                  type: string
 *                                  description: Name of user's Kyc Document
 *                              kycUrl:
 *                                  type: string
 *                                  description: Kyc image url
 *                              kycStatus:
 *                                  type: string
 *                                  description: Current Kyc status (Active/Inactive)
 *                              isDefault:
 *                                  type: string
 *                                  description: Is it default Kyc or not
 *          responses:
 *              200:
 *                  description: Kyc Details inserted Sucessfully
 *              400:
 *                  description: BAD_REQUEST ( Validation error )
 *              500:
 *                  description: Kyc Details insertion Failed
 * 
 */

   app
   .route('/api/v1/brand/:brandId/kyc')
   .post(
       async (req: Request, res: Response, next: NextFunction)=>{        
           await brandController.postKycDetails(req,res,next);
       }
   )



  /**
  *  @swagger
  * 
  * 
  *  
  *  /brand/{brandId}/kyc:
  *      get:
  *          summary: Get Kyc Details
  *          description: Get Kyc Details of a brand
  *          parameters:
  *                - in: path
  *                  name: brandId
  *                  required: true
  *                  description: BrandId of the Brand
  *                  schema:
  *                      type: string
  *          
  *          responses:
  *              200:
  *                  description: Fetched Kyc Details Sucessfully
  *              400:
  *                  description: BAD_REQUEST ( Validation error )
  *              500:
  *                  description: Fetching Kyc Details Failed
  * 
  */


  app
    .route('/api/v1/brand/:brandId/kyc')
    .get(
      async (req: Request, res: Response, next: NextFunction) => {
        await brandController.getKycDetails(req, res, next);
      }
    )

  /**
  *  @swagger  
  *  /brand/{brandId}/kyc:
  *      put:
  *          summary: updating kyc_details
  *          description: updating Brand Kyc details
  *          parameters:
  *                - in: path
  *                  name: brandId
  *                  required: true
  *                  description: BrandId of the Brand
  *                  schema:
  *                      type: string
  *          requestBody:
  *              content:
  *                  application/json:
  *                      schema:
  *                          properties:
  *                              kycNumber:
  *                                  type: string
  *                                  description: Kyc number of the user
  *                              kycType:
  *                                  type: string
  *                                  description: Type of user Kyc
  *                              kycName:
  *                                  type: string
  *                                  description: Name of user's Kyc Document
  *                              kycUrl:
  *                                  type: string
  *                                  description: Kyc image url
  *                              kycStatus:
  *                                  type: string
  *                                  description: Current Kyc status (Active/Inactive)
  *                              isDefault:
  *                                  type: string
  *                                  description: Is it default Kyc or not
  *          responses:
  *              200:
  *                  description: Kyc Details updated Sucessfully
  *              400:
  *                  description: BAD_REQUEST ( Validation error )
  *              500:
  *                  description: Kyc Details updation Failed
  * 
  */

  app
    .route('/api/v1/brand/:brandId/kyc')
    .put(
      async (req: Request, res: Response, next: NextFunction) => {
        await brandController.updateKycDetails(req, res, next);
      }
    )


  /**
   *  @swagger
   *  
   *  /brand/{brandId}/bank:
   *      post:
   *          summary: Inserting new entry to bank_details table
   *          description: Adding user bank details
   *          requestBody:
   *              content:
   *                  application/json:
   *                      schema:
   *                          properties:
   *                              bankNumber:
   *                                  type: string
   *                                  description: Bank account number of the user
   *                              brandId:
   *                                  type: string
   *                                  description: Brand Id of user
   *                              bankType:
   *                                  type: string
   *                                  description: Type of user Bank account
   *                              bankName:
   *                                  type: string
   *                                  description: Name of user's Bank
   *                              ifscCode:
   *                                  type: string
   *                                  description: IFSC code of user's Bank
   *                              bankUrl:
   *                                  type: string
   *                                  description: Bank image url
   *                              bankStatus:
   *                                  type: string
   *                                  description: Current bank account status (Active/Inactive)
   *                              isDefault:
   *                                  type: string
   *                                  description: Is it default bank or not
   *          responses:
   *              200:
   *                  description: Bank Account Details inserted Sucessfully
   *              400:
   *                  description: BAD_REQUEST ( Validation error )
   *              500:
   *                  description: Bank Account Details insertion Failed
   * 
   */


  app
    .route('/api/v1/brand/:brandId/bank')
    .post(
      async (req: Request, res: Response, next: NextFunction) => {
        await brandController.postBankDetails(req, res, next);
      }
    )

  /**
 *  @swagger
 *  
 *  /brand/{brandId}/bank:
 *      get:
 *          summary: get bank details
 *          description: Get bank Details of a specific brand
 *          parameters:
 *                - in: path
 *                  name: brandId
 *                  required: true
 *                  description: BrandId of the Brand
 *                  schema:
 *                      type: string
 *          responses:
 *              200:
 *                  description: Fetched Bank Account Details Sucessfully.
 *              400:
 *                  description: BAD_REQUEST ( Validation error )
 *              500:
 *                  description: Fetching Bank Account Details is Failed.
 * 
 */

   app
   .route('/api/v1/brand/:brandId/bank')
   .get(
       async (req: Request, res: Response, next: NextFunction)=>{
           await brandController.getBankDetails(req,res,next);
       }
   )


/**
*  @swagger
*  
*  /brand/{brandId}/bank:
*      put:
*          summary: Inserting new entry to bank_details table
*          description: Adding user bank details
*          parameters:
*                - in: path
*                  name: brandId
*                  required: true
*                  description: BrandId of the Brand
*                  schema:
*                      type: string
*          requestBody:
*              content:
*                  application/json:
*                      schema:
*                          properties:
*                              bankNumber:
*                                  type: string
*                                  description: Bank account number of the user
*                              bankType:
*                                  type: string
*                                  description: Type of user Bank account
*                              bankName:
*                                  type: string
*                                  description: Name of user's Bank
*                              bankUrl:
*                                  type: string
*                                  description: Bank image url
*                              bankStatus:
*                                  type: string
*                                  description: Current bank account status (Active/Inactive)
*                              isDefault:
*                                  type: string
*                                  description: Is it default bank or not
*          responses:
*              200:
*                  description: Bank Account Details updated Sucessfully
*              400:
*                  description: BAD_REQUEST ( Validation error )
*              500:
*                  description: Bank Account Details updation Failed
* 
*/

app
   .route('/api/v1/brand/:brandId/bank')
   .put(
       async (req: Request, res: Response, next: NextFunction)=>{
           await brandController.updateBankDetails(req,res,next);
       }
   )
}
