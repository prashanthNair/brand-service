import { Request, Response, NextFunction } from "express";
import { BankController } from "../controllers/bankController";


const bankRoute = (
    app,
    bankController: BankController = BankController.getInstance()
)=>{
    app
        .route('/api/v1/bank')
        .post(
            async (req: Request, res: Response, next: NextFunction)=>{        
                await bankController.postBankDetails(req,res,next);
            }
        )
}

export default bankRoute;


