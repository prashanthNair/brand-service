import { KycDetails } from "../models/kycDetails";

export interface IKycService {
    postKycDetails(kycDetailsData: KycDetails);
    getKycDetails(brandId: string);
    getBrand(brandId: string);
}