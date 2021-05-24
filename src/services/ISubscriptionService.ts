import { PostBrandSubscription, UpdateBrandSubscription } from "../models/subscription";

export interface ISubscriptionService {
    getBrandSubscriptions(brandId: string): Promise<any>,
    postBrandSubscription(brandSubData: PostBrandSubscription): Promise<any>,
    updateBrandSubscription(brandSubData: UpdateBrandSubscription): Promise<any>
}