import { Request, Response, NextFunction } from "express";
import { KycController } from "../controllers/kycController";


const kycRoute = (
    app,
    kycController: KycController = KycController.getInstance()
)=>{

  
/**
 *  @swagger
 * 
 * 
 *  
 *  /api/v1/brand/{brandId}/kyc:
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
                await kycController.postKycDetails(req,res,next);
            }
        )




/**
 *  @swagger
 * 
 * 
 *  
 *  /api/v1/brand/{brandId}/kyc:
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
            async (req: Request, res: Response, next: NextFunction)=>{
                await kycController.getKycDetails(req,res,next);
            }
        )

/**
 *  @swagger
 * 
 * 
 *  
 *  /api/v1/brand/{brandId}/kyc:
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
            async (req: Request, res: Response, next: NextFunction)=>{
                await kycController.updateKycDetails(req,res,next);
            }
        )

}

export default kycRoute;