import { BrandRegisterModel } from "../models/brandRegisterModel";

export interface IBrandService{
     register(brandRegisterModel: BrandRegisterModel): Promise<Object>
     update(BrandID: string, brandRegisterModel: BrandRegisterModel): Promise<Object>
     getAllCategory(domain_id: string): Promise<BrandRegisterModel>
     getAllDomains(): Promise<BrandRegisterModel>
     getAllProductCategory(category_Id: string): Promise<BrandRegisterModel>
    

}