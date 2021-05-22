import { Request, Response, NextFunction } from "express";
import { ISubscriptionValidation } from "../businessValidation/ISubscriptionValidation";
import { SubscriptionValidation } from "../businessValidation/subscriptionValidation";
import { BrandSubscription, GetBrandSubscription } from "../models/subscription";
import { ISubscriptionService } from "../services/ISubscriptionService";
import { SubscriptionService } from "../services/subscriptionService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";


class SubscriptionController {
    private constructor() { };
    private subscriptionService = null;
    private validationService = null;
    private static instance: SubscriptionController = null;

    /**
       * To get singleton instance
       *
       * @param  {object} subscriptionService
       */
    public static getInstance(
        subscriptionService: ISubscriptionService = SubscriptionService.getInstance(),
        validationService: ISubscriptionValidation = SubscriptionValidation.getInstance()
    ) {
        if (!SubscriptionController.instance){
            this.instance = new SubscriptionController();
        }
        SubscriptionController.instance.subscriptionService = subscriptionService;
        SubscriptionController.instance.validationService = validationService;
        return SubscriptionController.instance;
    }

    public getSubscriptions(req: Request, res: Response, next: NextFunction) {

        let { error, isError } = this.validationService.getBrandSubscriptions(req.body);

        if (error) {
            HttpResponseMessage.sendErrorResponse(res, "input validation error", error)
        }
        else {

            let brandId: GetBrandSubscription= req.body.brandId;
            let result = this.subscriptionService.getSubscriptions(brandId);

            if (result) {
                HttpResponseMessage.successResponse(res, "Sucessfull");
            } else {
                HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
            }
        }
    }

    public postBrandSubscription(req: Request, res: Response, next: NextFunction){
        let {error, isError} = this.validationService.postBrandSubscription(req.body);

        if(isError){
            HttpResponseMessage.sendErrorResponse(res, "input validation error", error)
        }else{
            let brandSubData: BrandSubscription = {
                brandId: req.body.brandId,
                subscriptionId: req.body.subscriptionId,
                subscriptionStatus: req.body.subscriptionStatus
            };

            let result = this.subscriptionService.postBrandSubscription(brandSubData)
            if (result) {
                HttpResponseMessage.successResponse(res, "Sucessfull");
            } else {
                HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
            }
        }
    }

    public updateBrandSubscription(req: Request, res: Response, next: NextFunction){
        let {error, isError} = this.validationService.updateBrandSubscription({...req.body, ...req.params});

        if(isError){
            HttpResponseMessage.sendErrorResponse(res, "input validation error", error)
        }else{
            let brandSubData: BrandSubscription = {
                brandId: req.params.brandId,
                subscriptionId: req.body.subscriptionId,
                subscriptionStatus: req.body.subscriptionStatus
            };

            let result = this.subscriptionService.updateBrandSubscription(brandSubData)
            if (result) {
                HttpResponseMessage.successResponse(res, "Sucessfull");
            } else {
                HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
            }
        }
    }
}

export { SubscriptionController };