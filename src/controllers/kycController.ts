import { Request, Response, NextFunction } from "express";
import { IKycService } from "../services/IKycService";
import { KycService } from "../services/kycService";
import { KycDetails, KycDetailsUpdateModel } from "../models/kycDetails";
import { IKycValidation } from "../businessValidation/IKycValidation";
import { KycValidation } from "../businessValidation/kycValidation";
import { HttpResponseMessage } from "../utils/httpResponseMessage";


export class KycController {
    private constructor() { }

    private static instance: KycController = null;
    private kycService = null;
    private validator = null;

    public static getInstance(
        kycService: IKycService = KycService.getInstance(),
        kycValidator: IKycValidation = KycValidation.getInstance()
    ) {
        if (!KycController.instance) {
            KycController.instance = new KycController();
        }

        KycController.instance.kycService = kycService; // mock service Object is passed as a param from .spec
        KycController.instance.validator = kycValidator;
        return KycController.instance;
    }

    public async postKycDetails(req: Request, res: Response, next: NextFunction) {
        //validate api inputs


        let { error, isError } = this.validator.validatePostKycDetailsInput({ ...req.body, ...req.params });

        if (isError) {
            HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
        } else {
            let KycDetailsInputModel: KycDetails = {

                kycNumber: req.body.kycNumber,
                brandId: req.params.brandId,
                kycType: req.body.kycType,
                kycName: req.body.kycName,
                kycUrl: req.body.kycUrl,
                kycStatus: req.body.kycStatus,
                isDefault: req.body.isDefault

            }

            const result = await this.kycService.postKycDetails(KycDetailsInputModel);

            if (result) {
                HttpResponseMessage.successResponse(res, "Kyc Details inserted Sucessfully");
            } else {
                HttpResponseMessage.sendErrorResponse(res, "Kyc Details insertion Failed");
            }
        }
    }

    public async getKycDetails(req: Request, res: Response, next: NextFunction) {

        let { error, isError } = this.validator.validateGetKycDetailsInput(req.params.brandId);

        if (isError) {
            HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
        } else {
            let brandId: string = req.params.brandId;

            const brand = await this.kycService.getBrand(brandId);

            if (!brand.errno) {

                const result = await this.kycService.getKycDetails(brandId);
                
                if (result[0][0].length!==0) {
                    let _result = result[0][0];
                    HttpResponseMessage.successResponseWithData(res, "Fetched Kyc Details Sucessfully", _result);
                } else {
                    HttpResponseMessage.sendErrorResponse(res, "Kyc Details is Not Found for current Brand");
                }

            } else {

                HttpResponseMessage.sendErrorResponse(res, "Fetching Kyc Details is Failed", brand);

            }
        }
    }


    public async updateKycDetails(req: Request, res: Response, next: NextFunction) {
        //validate api inputs

        
        let { error, isError } = this.validator.validateUpdateKycDetailsInput(req.body);

        if (isError) {
            HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
        } else {
            let KycDetailsInputModel: KycDetailsUpdateModel = {

                kycNumber: req.body.kycNumber,
                kycType: req.body.kycType,
                kycName: req.body.kycName,
                kycUrl: req.body.kycUrl,
                kycStatus: req.body.kycStatus,
                isDefault: req.body.isDefault

            }

            const result = await this.kycService.updateKycDetails(KycDetailsInputModel);

            if (result) {
                HttpResponseMessage.successResponse(res, "Kyc Details updated Sucessfully");
            } else {
                HttpResponseMessage.sendErrorResponse(res, "Kyc Details updation Failed");
            }
        }
    }



}
