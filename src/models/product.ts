export class Product {
   
  // [x: string]: string;
  BusinessDomain:string;
  Type: string;
  Name: string;
  Category: string;
  Brand: string; 
  BrandId:string;
  AvailableIn:string;
  AvailableInUrl:string[2];
  IsPaid:boolean;
  Plans:Array<Plan>;
  Features:Array<Feature>;
  Images:string[8];
  DefaultImageUrl:string
  Description:string;
  Discount:number;
  BuddyMargin:number;
  CommonMargin:number;
  Currency:string;   
  SellingPrice: string;  
  ActualPrice: string ;/*Price Including Discount % */  
  Created_date?: any;
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