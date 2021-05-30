import validator from "validator";
import { BankDetails } from "../models/bankDetails";
import { IBankValidation } from "../businessValidation/IBankvalidation";


const isEmpty = (val) =>
    val === undefined ||
    val === null ||
    typeof (val) === "string" && val.trim().length === 0 ||
    typeof (val) === "object" && Object.keys(val).length === 0;



class BankValidation implements IBankValidation{
    private constructor(){}

    private static instance: IBankValidation = null;

    static getInstance(){
        if(!BankValidation.instance){
            BankValidation.instance = new BankValidation();
        }
        return BankValidation.instance;
    }

    public validatePostBankDetailsInput = (data: BankDetails) : object =>{
        let error = {};

        // add necessary validation rules like type | length | required etc

        if(isEmpty(data.BankNumber)) error["BankNumber"] = "Bank Account Number field cannot be left blank";
        if(typeof(data.BankNumber) !== "string" ) error["BankNumber"] = "Bank Account Number must be of type string";

        if(isEmpty(data.BrandId)) error["BrandId"] = "Brand ID field cannot be left blank";
        if(typeof(data.BrandId) !== "string" ) error["BrandId"] = "Brand ID must be of type string";

        
        if(isEmpty(data.BankType)) error["BankType"] = "Bank Type field cannot be left blank";
        if(typeof(data.BankType) !== "string" ) error["BankType"] = "Bank Type must be of type string";


        if(isEmpty(data.BankName)) error["BankName"] = "Bank Name field cannot be left blank";
        if(typeof(data.BankName) !== "string" ) error["BankName"] = "Bank Name must be of type string";

        if(isEmpty(data.BankUrl)) error["BankUrl"] = "Bank Name field cannot be left blank";
        if(typeof(data.BankUrl) !== "string" ) error["BankUrl"] = "Bank Name must be of type string";


        if(isEmpty(data.BankStatus)) error["BankStatus"] = "Bank Status field cannot be left blank";
        if(typeof(data.BankStatus) !== "string" ) error["BankStatus"] = "Bank Status must be of type string";

        
        if(isEmpty(data.IsDefault)) error["IsDefault"] = "Is Default field cannot be left blank";
        if(typeof(data.IsDefault) !== "string" ) error["IsDefault"] = "Is Default must be of type string";

        if(isEmpty(data.IfscCode)) error["IfscCode"] = "IFSC field cannot be left blank";
        if(typeof(data.IfscCode) !== "string" ) error["IfscCode"] = "IFSC must be of type string";
        

        let isError = !isEmpty(error);
        return {error, isError};
    }
}

export { BankValidation };