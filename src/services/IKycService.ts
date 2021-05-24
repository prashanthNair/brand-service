import { KycDetails } from "../models/kycDetails";

export interface IKycService {
    postKycDetails(kycDetailsData: KycDetails);
}