import { Request, Response, NextFunction } from "express";
import { KycController } from "../controllers/kycController";


const kycRoute = (
    app,
    kycController: KycController = KycController.getInstance()
)=>{

/**
 *  @swagger
 *  
 *  /api/v1/kyc:
 *      post:
 *          summary: Inserting new entry to kyc_details table
 *          description: Inserting Brand Kyc details
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          properties:
 *                              KycNumber:
 *                                  type: string
 *                                  description: Kyc number of the user
 *                              BrandId:
 *                                  type: string
 *                                  description: Brand Id of user
 *                              KycType:
 *                                  type: string
 *                                  description: Type of user Kyc
 *                              KycName:
 *                                  type: string
 *                                  description: Name of user's Kyc Document
 *                              KycUrl:
 *                                  type: string
 *                                  description: Kyc image url
 *                              KycStatus:
 *                                  type: string
 *                                  description: Current Kyc status (Active/Inactive)
 *                              IsDefault:
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
        .route('/api/v1/kyc')
        .post(
            async (req: Request, res: Response, next: NextFunction)=>{        
                await kycController.postKycDetails(req,res,next);
            }
        )

}

export default kycRoute;