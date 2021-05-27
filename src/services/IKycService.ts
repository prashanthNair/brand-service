import { KycDetails,KycDetailsUpdateModel } from "../models/kycDetails";

export interface IKycService {
    postKycDetails(kycDetailsData: KycDetails);
    getKycDetails(brandId: string);
    updateKycDetails(kycDetailsData: KycDetailsUpdateModel);
    getBrand(brandId: string);
}