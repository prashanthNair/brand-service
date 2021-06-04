import { BankDetails, UpdateBankDetails } from "../models/bankDetails";
import { BrandRegisterModel } from "../models/brandRegisterModel";
import { KycDetails, KycDetailsUpdateModel } from "../models/kycDetails";

export interface IBrandService{
     register(brandRegisterModel: BrandRegisterModel): Promise<Object>
     update(BrandID: string, brandRegisterModel: BrandRegisterModel): Promise<Object>
     getAllCategory(domain_id: string): Promise<BrandRegisterModel>
     getAllDomains(): Promise<BrandRegisterModel>
     getAllProductCategory(category_Id: string): Promise<BrandRegisterModel>

     postBankDetails(bankDetailsData: BankDetails);
     getBankDetails(brandId: string);
     updateBankDetails(bankDetailsData: UpdateBankDetails);

     postKycDetails(kycDetailsData: KycDetails);
     getKycDetails(brandId: string);
     updateKycDetails(kycDetailsData: KycDetailsUpdateModel);

     getBrand(brandId: string);

}