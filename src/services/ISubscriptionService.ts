import { BrandSubscription } from "../models/subscription";

export interface ISubscriptionService {
    getSubscriptions({}): any,
    postBrandSubscription(brandSubData: BrandSubscription): Promise<any>,
    updateBrandSubscription(brandSubData: BrandSubscription): Promise<any>
}