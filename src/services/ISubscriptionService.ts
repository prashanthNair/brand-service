import { PostBrandSubscription, PostBrandSubscriptionSP, UpdateBrandSubscription } from "../models/subscription";

export interface ISubscriptionService {
    getMasterSubscriptions(sub_Id: string): Promise<any>,
    getBrandSubscriptions(brandId: string): Promise<any>,
    postBrandSubscription(brandSubData: PostBrandSubscriptionSP): Promise<any>,
    updateBrandSubscription(brandSubData: UpdateBrandSubscription): Promise<any>
}