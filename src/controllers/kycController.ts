import { Request, Response, NextFunction } from "express";
import { IKycService } from "../services/IKycService";
import { KycService } from "../services/kycService";
import { KycDetails } from "../models/kycDetails";
import { IKycValidation } from "../businessValidation/IKycValidation";
import { KycValidation } from "../businessValidation/kycValidation";
import { HttpResponseMessage } from "../utils/httpResponseMessage";


export class KycController{
    private constructor() {}

    private static instance: KycController = null;
    private kycService = null;
    private validator = null;

    public static getInstance(
        kycService: IKycService = KycService.getInstance(),
        kycValidator: IKycValidation = KycValidation.getInstance()
    ){
        if(!KycController.instance) {
            KycController.instance = new KycController();
        }

        KycController.instance.kycService = kycService; // mock service Object is passed as a param from .spec
        KycController.instance.validator = kycValidator;
        return KycController.instance;
    }

    public async postKycDetails (req: Request, res: Response, next: NextFunction){
        //validate api inputs
        

        let { error, isError } = this.validator.validatePostKycDetailsInput(req.body);

        if (isError) {
            HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
        } else {
            let KycDetailsInputModel: KycDetails = {

                KycNumber: req.body.KycNumber,
                BrandId: req.body.BrandId,
                KycType: req.body.KycType,
                KycName: req.body.KycName,
                KycUrl: req.body.KycUrl,
                KycStatus: req.body.KycStatus,
                IsDefault: req.body.IsDefault
            
            }

            const result = await this.kycService.postKycDetails(KycDetailsInputModel);

            if(result){
                HttpResponseMessage.successResponse(res, "Kyc Details inserted Sucessfully");
            }else{
                HttpResponseMessage.sendErrorResponse(res, "Kyc Details insertion Failed");
            }
        }
    }
    
}
