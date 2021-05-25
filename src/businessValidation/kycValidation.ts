import validator from "validator";
import { KycDetails } from "../models/kycDetails";
import { IKycValidation } from "../businessValidation/IKycValidation";

const isEmpty = (val) =>
    val === undefined ||
    val === null ||
    typeof (val) === "string" && val.trim().length === 0 ||
    typeof (val) === "object" && Object.keys(val).length === 0;



class KycValidation implements IKycValidation {
    private constructor() {}
    
    private static instance: IKycValidation = null;

    static getInstance(){
        if(!KycValidation.instance){
            KycValidation.instance = new KycValidation();
        }
        return KycValidation.instance;
    }

    public validatePostKycDetailsInput = (data: KycDetails): object =>{
        let error = {}

        // add necessary validation rules like type | length | required etc

        if(isEmpty(data.KycNumber)) error["KycNumber"] = "KYC Number field cannot be left blank";
        if(typeof(data.KycNumber) !== "string" ) error["KycNumber"] = "KYC Number must be of type string";

        if(isEmpty(data.BrandId)) error["BrandId"] = "Brand ID field cannot be left blank";
        if(typeof(data.BrandId) !== "string" ) error["BrandId"] = "Brand ID must be of type string";

        if(isEmpty(data.KycType)) error["KycType"] = "Kyc Type field cannot be left blank";
        if(typeof(data.KycType) !== "string" ) error["KycType"] = "Kyc Type must be of type string";

        if(isEmpty(data.KycName)) error["KycName"] = "Kyc Name field cannot be left blank";
        if(typeof(data.KycName) !== "string" ) error["KycName"] = "Kyc Name must be of type string";

        if(isEmpty(data.KycUrl)) error["KycUrl"] = "Kyc Url field cannot be left blank";
        if(typeof(data.KycUrl) !== "string" ) error["KycUrl"] = "Kyc Url must be of type string";

        if(isEmpty(data.KycStatus)) error["KycStatus"] = "Kyc Status field cannot be left blank";
        if(typeof(data.KycStatus) !== "string" ) error["KycStatus"] = "Kyc Status must be of type string";


        if(isEmpty(data.IsDefault)) error["IsDefault"] = "IsDefault field cannot be left blank";
        if(typeof(data.IsDefault) !== "string" ) error["IsDefault"] = "IsDefault must be of type string";

        let isError = !isEmpty(error);
        return {error, isError};
    }
}

export { KycValidation };