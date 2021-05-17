import { BrandRegisterModel } from "../models/brandRegisterModel";

export interface IBrandService{

     register(brandRegisterModel: BrandRegisterModel): Promise<Object>
    

}