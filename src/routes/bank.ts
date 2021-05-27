import { Request, Response, NextFunction } from "express";
import { BankController } from "../controllers/bankController";


const bankRoute = (
    app,
    bankController: BankController = BankController.getInstance()
)=>{

/**
 *  @swagger
 *  
 *  /api/v1/bank:
 *      post:
 *          summary: Inserting new entry to bank_details table
 *          description: Adding user bank details
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          properties:
 *                              BankNumber:
 *                                  type: string
 *                                  description: Bank account number of the user
 *                              BrandId:
 *                                  type: string
 *                                  description: Brand Id of user
 *                              BankType:
 *                                  type: string
 *                                  description: Type of user Bank account
 *                              BankName:
 *                                  type: string
 *                                  description: Name of user's Bank
 *                              IfscCode:
 *                                  type: string
 *                                  description: IFSC code of user's Bank
 *                              BankUrl:
 *                                  type: string
 *                                  description: Bank image url
 *                              BankStatus:
 *                                  type: string
 *                                  description: Current bank account status (Active/Inactive)
 *                              IsDefault:
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
        .route('/api/v1/bank')
        .post(
            async (req: Request, res: Response, next: NextFunction)=>{        
                await bankController.postBankDetails(req,res,next);
            }
        )
}

export default bankRoute;


