import validator from "validator";
import { KycDetails, KycDetailsUpdateModel } from "../models/kycDetails";
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

        if(isEmpty(data.kycNumber)) error["kycNumber"] = "KYC Number field cannot be left blank";
        if(typeof(data.kycNumber) !== "string" ) error["kycNumber"] = "KYC Number must be of type string";

        if(isEmpty(data.brandId)) error["brandId"] = "Brand ID field cannot be left blank";
        if(typeof(data.brandId) !== "string" ) error["brandId"] = "Brand ID must be of type string";

        if(isEmpty(data.kycType)) error["kycType"] = "Kyc Type field cannot be left blank";
        if(typeof(data.kycType) !== "string" ) error["kycType"] = "Kyc Type must be of type string";

        if(isEmpty(data.kycName)) error["kycName"] = "Kyc Name field cannot be left blank";
        if(typeof(data.kycName) !== "string" ) error["kycName"] = "Kyc Name must be of type string";

        if(isEmpty(data.kycUrl)) error["kycUrl"] = "Kyc Url field cannot be left blank";
        if(typeof(data.kycUrl) !== "string" ) error["kycUrl"] = "Kyc Url must be of type string";

        if(isEmpty(data.kycStatus)) error["kycStatus"] = "Kyc Status field cannot be left blank";
        if(typeof(data.kycStatus) !== "string" ) error["kycStatus"] = "Kyc Status must be of type string";


        if(isEmpty(data.isDefault)) error["isDefault"] = "IsDefault field cannot be left blank";
        if(typeof(data.isDefault) !== "string" ) error["isDefault"] = "IsDefault must be of type string";

        let isError = !isEmpty(error);
        return {error, isError};
    }

    public validateGetKycDetailsInput = (brandId: string): object =>{

        let error = {};

        if(isEmpty(brandId)) error["brandId"] = "Brand ID field cannot be left blank";
        if(typeof(brandId) !== "string" ) error["brandId"] = "Brand ID must be of type string";

        let isError = !isEmpty(error);
        return {error, isError};
    }

    public validateUpdateKycDetailsInput = (data: KycDetailsUpdateModel): object =>{
        let error = {}

        // add necessary validation rules like type | length | required etc

        if(isEmpty(data.kycNumber)) error["kycNumber"] = "KYC Number field cannot be left blank";
        if(typeof(data.kycNumber) !== "string" ) error["kycNumber"] = "KYC Number must be of type string";

        if(isEmpty(data.kycType)) error["kycType"] = "Kyc Type field cannot be left blank";
        if(typeof(data.kycType) !== "string" ) error["kycType"] = "Kyc Type must be of type string";

        if(isEmpty(data.kycName)) error["kycName"] = "Kyc Name field cannot be left blank";
        if(typeof(data.kycName) !== "string" ) error["kycName"] = "Kyc Name must be of type string";

        if(isEmpty(data.kycUrl)) error["kycUrl"] = "Kyc Url field cannot be left blank";
        if(typeof(data.kycUrl) !== "string" ) error["kycUrl"] = "Kyc Url must be of type string";

        if(isEmpty(data.kycStatus)) error["kycStatus"] = "Kyc Status field cannot be left blank";
        if(typeof(data.kycStatus) !== "string" ) error["kycStatus"] = "Kyc Status must be of type string";


        if(isEmpty(data.isDefault)) error["isDefault"] = "IsDefault field cannot be left blank";
        if(typeof(data.isDefault) !== "string" ) error["isDefault"] = "IsDefault must be of type string";

        let isError = !isEmpty(error);
        return {error, isError};
    }
}

export { KycValidation };