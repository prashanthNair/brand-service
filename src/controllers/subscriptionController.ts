import { Request, Response, NextFunction } from "express";
import { ISubscriptionValidation } from "../businessValidation/ISubscriptionValidation";
import { SubscriptionValidation } from "../businessValidation/subscriptionValidation";
import { PostBrandSubscription, UpdateBrandSubscription } from "../models/subscription";
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

    public getMasterSubscriptions(req: Request, res: Response, next: NextFunction) {

        let { error, isError } = this.validationService.getMasterSubscriptions(req.params);

        if (isError) {
            HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
        }
        else {

            let sub_Id: string = req.params.subscriptionId;
            this.subscriptionService.getMasterSubscriptions(sub_Id)
                .then(result => {
                    let _result = result[0][0];
                    HttpResponseMessage.successResponseWithData(res, "Sucessfull", _result);
                })
                .catch(err => {
                    HttpResponseMessage.sendErrorResponse(res, "Transaction Failed", error.message);
                });
        }

    }

    public getBrandSubscriptions(req: Request, res: Response, next: NextFunction) {

        let { error, isError } = this.validationService.getBrandSubscriptions(req.params);

        if (isError) {
            HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
        }
        else {

            let brandId: string = req.params.brandId;
            this.subscriptionService.getBrandSubscriptions(brandId)
                .then(result => {
                    let _res = result[0][0];
                    HttpResponseMessage.successResponseWithData(res, "Sucessfull", _res);
                })
                .catch(err => {
                    HttpResponseMessage.sendErrorResponse(res, "Transaction Failed", error.message);
                });
        }
    }

    public postBrandSubscription(req: Request, res: Response, next: NextFunction){
        let {error, isError} = this.validationService.postBrandSubscription({...req.params, ...req.body});

        if(isError){
            HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
        }else{

            let sub_id = req.body.subscriptionId.join(',');
                console.log(typeof(sub_id))
                
            let brandSubData: PostBrandSubscription = {
                brandId: req.params.brandId,
                subscriptionId: sub_id
            };

            this.subscriptionService.postBrandSubscription(brandSubData)
                .then(result => {
                    HttpResponseMessage.successResponseWithData(res, "Sucessfull", result[0][0]);
                }).catch(err => {
                    HttpResponseMessage.sendErrorResponse(res, "Transaction Failed", err.message);
                });
    }
}

    public updateBrandSubscription(req: Request, res: Response, next: NextFunction){
        let {error, isError} = this.validationService.updateBrandSubscription({...req.body, ...req.params});

        if(isError){
            HttpResponseMessage.validationErrorWithData(res, "input validation error", error)
        }else{
            let brandSubData: UpdateBrandSubscription = {
                brandId: req.params.brandId,
                subscriptionId: req.params.subscriptionId,
                subscriptionStatus: req.body.subscriptionStatus
            };

            this.subscriptionService.updateBrandSubscription(brandSubData)
                .then(result => {
                    HttpResponseMessage.successResponse(res, "Sucessfull");
                }).catch(err => {
                    HttpResponseMessage.sendErrorResponse(res, "Transaction Failed", error.message);
                });
        }
    }
}

export { SubscriptionController };