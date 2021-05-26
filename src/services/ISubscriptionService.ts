import { PostBrandSubscription, UpdateBrandSubscription } from "../models/subscription";

export interface ISubscriptionService {
    getMasterSubscriptions(sub_Id: string): Promise<any>,
    getBrandSubscriptions(brandId: string): Promise<any>,
    postBrandSubscription(brandSubData: PostBrandSubscription): Promise<any>,
    updateBrandSubscription(brandSubData: UpdateBrandSubscription): Promise<any>
}