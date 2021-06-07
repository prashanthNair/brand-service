import validator from 'validator';
import { PostBrandSubscription, subscription, UpdateBrandSubscription } from '../models/subscription';
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

    public getMasterSubscriptions(data: object): object {
        let error = {};

        if (isEmpty(data["subscriptionId"])) error["subscriptionId"] = "subscriptionId required";
        else if (typeof (data["subscriptionId"]) !== "string") error["subscriptionId"] = "subscriptionId must be of type string";

        let isError = !isEmpty(error);

        return { error, isError };
    }

    public getBrandSubscriptions(data: object): object{
        let error = {};

        if(isEmpty(data["brandId"])) error["brandId"] = "brandId required";
        if(typeof(data["brandId"]) !== "string") error["brandId"] = "brandId must be of type string";

        let isError = !isEmpty(error);

        return {error, isError};
    }

    public postBrandSubscription(data: PostBrandSubscription): object{

        let error = {};

        if(isEmpty(data.brandId)) error["brandId"] = "brandId is required";
        else if(typeof(data.brandId) !== "string") error["brandId"]= "brandId must be of type string";

        if(isEmpty(data.subscriptionId)) error["subscriptionId"] = "subscriptionId is required";
        else if(!Array.isArray(data.subscriptionId)) error["subscriptionId"] = "subscriptionId must of type array";
        else{
            data.subscriptionId.map((sub, i) => {
                if(typeof(sub) !== "string") error["subscriptionId"] = "subscriptionId must be array of strings";
            })
        }
        // if(typeof(data.subscriptionId) !== "string") error["subscriptionId"]= "subscriptionId must be of type string";

        let isError = !isEmpty(error);
        return {error, isError};
    }
    
    public updateBrandSubscription(data: UpdateBrandSubscription): object{

        let error = {};

        if(isEmpty(data.brandId)) error["brandId"] = "brandId in URL parameter is required";
        else if(typeof(data.brandId) !== "string") error["brandId"]= "brandId must be of type string";

        if(isEmpty(data.subscriptionId)) error["subscriptionId"] = "subscriptionId is required";
        else if(typeof(data.subscriptionId) !== "string") error["subscriptionId"]= "subscriptionId must be of type string";

        if(isEmpty(data.subscriptionStatus)) error["subscriptionStatus"] = "subscriptionStatus is required"
        else if(data.subscriptionStatus !== "ACTIVE" && data.subscriptionStatus !== "INACTIVE") error["subscriptionStatus"] = "subscriptionStatus should be either ACTIVE/INACTIVE";
    
        let isError = !isEmpty(error);
        return {error, isError};
    }
}

export { SubscriptionValidation };