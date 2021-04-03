export class Brand { 
    BusinessDomain:string; 
    Name: string;
    BrandName:string;     
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