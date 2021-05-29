export class Product {
  categoryId: string;
  productCategoryId: string;
  brandId: string;
  productName: string;
  title: string;
  keyPoints: string;
  mrp: string;
  sellingPrice: string;
  loyaltyPercentage: string;
  buddyMargin: string;
  tag: string;
  isVeg: string;
  ageGroup: string;
  weight: string;
  manufacturedDate: string;
  expiryDate: string;
  productBrand: string;
  currency: string;
}

export class GetAllProductsInput {
  brandId: string;
  status: string;
}

export class GetBrandProductInput{
  brandId: string;
  productId: string;
}

export class Plan {
  PlanName:string;
  Plan:string;
  Amount:number
  IsActive:boolean;  
}


export class Feature {
  FeatureName:string;
  TagedPlan:string;
  TrailPeriod:number;
  IsActive:boolean;  
}