import validator from 'validator';
import { BrandSubscription, GetBrandSubscription } from '../models/subscription';
import { isEmpty } from './isEmpty';
import { ISubscriptionValidation } from './ISubscriptionValidation';

class SubscriptionValidation implements ISubscriptionValidation{
    private constructor() {};
    private static instance: ISubscriptionValidation = null;

    static getInstance() {
        if(!SubscriptionValidation.instance){
            SubscriptionValidation.instance = new SubscriptionValidation();
        }
        return SubscriptionValidation.instance;
    }


    public getSubscriptions(data): object {
        return {}
    }

    public getBrandSubscriptions(data: GetBrandSubscription): object{
        let error = {};

        if(isEmpty(data.brandId)) error["brandId"] = "brandId required";
        if(typeof(data.brandId) !== "string") error["brandId"] = "brandId must be of type string";

        let isError = !isEmpty(error);

        return {error, isError};
    }

    public postBrandSubscription(data: BrandSubscription): object{

        let error = {};

        if(isEmpty(data.brandId)) error["brandId"] = "brandId is required";
        if(typeof(data.brandId) !== "string") error["brandId"]= "brandId must be of type string";

        if(isEmpty(data.subscriptionId)) error["subscriptionId"] = "subscriptionId is required";
        if(typeof(data.subscriptionId) !== "string") error["subscriptionId"]= "subscriptionId must be of type string";

        if(isEmpty(data.subscriptionStatus)) error["subscriptionStatus"] = "subscriptionStatus is required"
        if(data.subscriptionStatus !== "ACTIVE" && data.subscriptionStatus !== "INACTIVE") error["subscriptionStatus"] = "subscriptionStatus should be either ACTIVE/INACTIVE";
    
        let isError = !isEmpty(error);
        return {error, isError};
    }
    
    public updateBrandSubscription(data: BrandSubscription): object{

        let error = {};

        if(isEmpty(data.brandId)) error["brandId"] = "brandId in URL parameter is required";
        if(typeof(data.brandId) !== "string") error["brandId"]= "brandId must be of type string";

        if(isEmpty(data.subscriptionId)) error["subscriptionId"] = "subscriptionId is required";
        if(typeof(data.subscriptionId) !== "string") error["subscriptionId"]= "subscriptionId must be of type string";

        if(isEmpty(data.subscriptionStatus)) error["subscriptionStatus"] = "subscriptionStatus is required"
        if(data.subscriptionStatus !== "ACTIVE" && data.subscriptionStatus !== "INACTIVE") error["subscriptionStatus"] = "subscriptionStatus should be either ACTIVE/INACTIVE";
    
        let isError = !isEmpty(error);
        return {error, isError};
    }
}

export { SubscriptionValidation };