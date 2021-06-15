export class subscription{
    
}

export class PostBrandSubscription{
    brandId: string;
    subscriptionId: [string];
}

export class PostBrandSubscriptionSP{
    brandId: string;
    subscriptionId: string;
}

export class UpdateBrandSubscription{
    brandId: string;
    subscriptionId: string;
    subscriptionStatus: string;
}