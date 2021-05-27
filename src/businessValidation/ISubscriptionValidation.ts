import { PostBrandSubscription, UpdateBrandSubscription } from "../models/subscription";

export interface ISubscriptionValidation{
    getBrandSubscriptions(data: object): object,
    postBrandSubscription(data: PostBrandSubscription): object,
    updateBrandSubscription(data: UpdateBrandSubscription): object
}