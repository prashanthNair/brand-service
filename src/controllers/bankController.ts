import { Request, Response, NextFunction } from "express";
import { IBankService } from "../services/IBankService";
import { BankService } from "../services/bankService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
import { BankDetails } from "../models/bankDetails";
import { BankValidation } from "../businessValidation/bankValidation";
import { IBankValidation } from "../businessValidation/IBankvalidation";


export class BankController {
    private constructor() { }

    private static instance: BankController = null;
    private bankService = null;
    private validator = null;

    public static getInstance(
        bankService: IBankService = BankService.getInstance(),
        bankValidator: IBankValidation = BankValidation.getInstance()
    ) {
        if (!BankController.instance) {
            BankController.instance = new BankController();
        }
        BankController.instance.bankService = bankService; // mock service Object is passed as a param from .spec
        BankController.instance.validator = bankValidator;
        return BankController.instance;
    }

    public async postBankDetails(req: Request, res: Response, next: NextFunction) {
        //validate api inputs
        let { error, isError } = this.validator.validatePostBankDetailsInput(req.body);

        if (isError) {
            HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
        } else {
            let bankDetailsInputModel: BankDetails = {
                
                BrandId: req.body.BrandId,
                BankType: req.body.BankType,
                BankName: req.body.BankName,
                IfscCode: req.body.IfscCode,
                BankUrl: req.body.BankUrl,
                BankStatus: req.body.BankStatus,
                IsDefault: req.body.IsDefault,
                BankNumber: req.body.BankNumber
            };

            const result = await this.bankService.postBankDetails(bankDetailsInputModel);

            if (result) {
                HttpResponseMessage.successResponse(res, "Bank Account Details inserted Sucessfully");
            } else {
                HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
            }
        }
    }



}