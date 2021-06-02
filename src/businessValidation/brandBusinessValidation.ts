import validator from 'validator';
import { BrandRegisterModel } from "../models/brandRegisterModel";
import { BrandUpdateModel } from "../models/brandUpdateModel";
import { BankDetails, UpdateBankDetails } from "../models/bankDetails";
import { KycDetails, KycDetailsUpdateModel } from "../models/kycDetails";
import { IBrandBusinessValidation } from "./IBrandBusinessValidation";
import { isEmpty } from './isEmpty';

export class BrandBusinessValidation implements IBrandBusinessValidation {
    private constructor() {}
  
    private static instance: IBrandBusinessValidation = null;
  
    static getInstance() {
      if (!BrandBusinessValidation.instance) {
        BrandBusinessValidation.instance = new BrandBusinessValidation();
      }
      return BrandBusinessValidation.instance;
    }

    public validatePostBrandInput = (data: BrandRegisterModel) : object =>{

        let error = {};

        // add necessary validation rules like type | length | required etc
        if(isEmpty(data.DomainID)) error["DomainID"] = "DomainID field is required";
        if(typeof(data.DomainID) !== "string") error["DomainID"] = "DomainID must be of type string";

        if(isEmpty(data.CategoryId)) error["CategoryId"] = "CategoryId field is required";
        if(typeof(data.CategoryId) !== "string") error["CategoryId"] = "CategoryId must be of type string";

        if(isEmpty(data.Category)) error["Category"] = "Category field is required";
        if(typeof(data.Category) !== "string") error["Category"] = "Category must be of type string";
        
        if(isEmpty(data.BrandName)) error["BrandName"] = "BrandName field is required";
        if(typeof(data.BrandName) !== "string") error["BrandName"] = "BrandName must be of type string";
        
        if(isEmpty(data.About)) error["About"] = "About field is required";
        if(typeof(data.About) !== "string") error["About"] = "About must be of type string";
        
        if(isEmpty(data.Country)) error["Country"] = "Country field is required";
        if(typeof(data.Country) !== "string") error["Country"] = "Country must be of type string";
        
        if(isEmpty(data.EmailId)) error["EmailId"] = "EmailId field is required";
        if(typeof(data.EmailId) !== "string") error["EmailId"] = "EmailId must be of type string";
        if(validator.isEmail(data.EmailId)) error["EmailId"] = "Enter a valid EmailId";

        if(isEmpty(data.PhoneNumber)) error["PhoneNumber"] = "PhoneNumber field is required";
        if(typeof(data.PhoneNumber) !== "number") error["PhoneNumber"] = "PhoneNumber must be of type number";
        
        if(isEmpty(data.CountryCode)) error["CountryCode"] = "CountryCode field is required";
        if(typeof(data.CountryCode) !== "string") error["CountryCode"] = "CountryCode must be of type string";
        
        if(isEmpty(data.Street)) error["Street"] = "Street field is required";
        if(typeof(data.Street) !== "string") error["Street"] = "Street must be of type string";
        
        if(isEmpty(data.City)) error["City"] = "City field is required";
        if(typeof(data.City) !== "string") error["City"] = "City must be of type string";

        if(isEmpty(data.State)) error["State"] = "State field is required";
        if(typeof(data.State) !== "string") error["State"] = "State must be of type string";
        
        if(isEmpty(data.PostalCode)) error["PostalCode"] = "PostalCode field is required";
        if(typeof(data.PostalCode) !== "string") error["PostalCode"] = "PostalCode must be of type string";
        
        if(isEmpty(data.UserName)) error["UserName"] = "UserName field is required";
        if(typeof(data.UserName) !== "string") error["UserName"] = "UserName must be of type string";

        if(isEmpty(data.Designation)) error["Designation"] = "Designation field is required";
        if(typeof(data.Designation) !== "string") error["Designation"] = "Designation must be of type string";
        
        if(isEmpty(data.UserEmailId)) error["UserEmailId"] = "UserEmailId field is required";
        if(typeof(data.UserEmailId) !== "string") error["UserEmailId"] = "UserEmailId must be of type string";
        if(validator.isEmail(data.UserEmailId)) error["UserEmailId"] = "Enter a valid Email Id";

        if(isEmpty(data.RegBusinessName)) error["RegBusinessName"] = "RegBusinessName field is required";
        if(typeof(data.RegBusinessName) !== "string") error["RegBusinessName"] = "RegBusinessName must be of type string";
        
        if(isEmpty(data.RegisteredType)) error["RegisteredType"] = "RegisteredType field is required";
        if(typeof(data.RegisteredType) !== "string") error["RegisteredType"] = "RegisteredType must be of type string";

        if(isEmpty(data.AccountPassword)) error["AccountPassword"] = "AccountPassword field is required";
        if(typeof(data.AccountPassword) !== "string") error["AccountPassword"] = "AccountPassword must be of type string";


        let isError = !isEmpty(error);
        return {error, isError};
    }

    public validatePatchBrandInput = (BrandID: string, data: BrandUpdateModel) : object  => {
      let error = {};
      
      if(isEmpty(BrandID)) error["BrandID"] = "BrandID field is required";
      if(typeof(BrandID) !== "string") error["BrandID"] = "BrandID must be of type string";

      if(isEmpty(data.DomainID)) error["DomainID"] = "DomainID field is required";
      if(typeof(data.DomainID) !== "string") error["DomainID"] = "DomainID must be of type string";

      if(isEmpty(data.CategoryId)) error["CategoryId"] = "CategoryId field is required";
      if(typeof(data.CategoryId) !== "string") error["CategoryId"] = "CategoryId must be of type string";

      if(isEmpty(data.Category)) error["Category"] = "Category field is required";
      if(typeof(data.Category) !== "string") error["Category"] = "Category must be of type string";
      
      if(isEmpty(data.BrandName)) error["BrandName"] = "BrandName field is required";
      if(typeof(data.BrandName) !== "string") error["BrandName"] = "BrandName must be of type string";
      
      if(isEmpty(data.About)) error["About"] = "About field is required";
      if(typeof(data.About) !== "string") error["About"] = "About must be of type string";
      
      if(isEmpty(data.Country)) error["Country"] = "Country field is required";
      if(typeof(data.Country) !== "string") error["Country"] = "Country must be of type string";
      
      if(isEmpty(data.EmailId)) error["EmailId"] = "EmailId field is required";
      if(typeof(data.EmailId) !== "string") error["EmailId"] = "EmailId must be of type string";
      if(validator.isEmail(data.EmailId)) error["EmailId"] = "Enter a valid EmailId";

      if(isEmpty(data.PhoneNumber)) error["PhoneNumber"] = "PhoneNumber field is required";
      if(typeof(data.PhoneNumber) !== "number") error["PhoneNumber"] = "PhoneNumber must be of type number";
      
      if(isEmpty(data.CountryCode)) error["CountryCode"] = "CountryCode field is required";
      if(typeof(data.CountryCode) !== "string") error["CountryCode"] = "CountryCode must be of type string";
      
      if(isEmpty(data.Street)) error["Street"] = "Street field is required";
      if(typeof(data.Street) !== "string") error["Street"] = "Street must be of type string";
      
      if(isEmpty(data.City)) error["City"] = "City field is required";
      if(typeof(data.City) !== "string") error["City"] = "City must be of type string";

      if(isEmpty(data.State)) error["State"] = "State field is required";
      if(typeof(data.State) !== "string") error["State"] = "State must be of type string";
      
      if(isEmpty(data.PostalCode)) error["PostalCode"] = "PostalCode field is required";
      if(typeof(data.PostalCode) !== "string") error["PostalCode"] = "PostalCode must be of type string";
      
      if(isEmpty(data.UserName)) error["UserName"] = "UserName field is required";
      if(typeof(data.UserName) !== "string") error["UserName"] = "UserName must be of type string";

      if(isEmpty(data.Designation)) error["Designation"] = "Designation field is required";
      if(typeof(data.Designation) !== "string") error["Designation"] = "Designation must be of type string";
      
      if(isEmpty(data.UserEmailId)) error["UserEmailId"] = "UserEmailId field is required";
      if(typeof(data.UserEmailId) !== "string") error["UserEmailId"] = "UserEmailId must be of type string";
      if(validator.isEmail(data.UserEmailId)) error["UserEmailId"] = "Enter a valid Email Id";

      if(isEmpty(data.RegBusinessName)) error["RegBusinessName"] = "RegBusinessName field is required";
      if(typeof(data.RegBusinessName) !== "string") error["RegBusinessName"] = "RegBusinessName must be of type string";
      
      if(isEmpty(data.RegisteredType)) error["RegisteredType"] = "RegisteredType field is required";
      if(typeof(data.RegisteredType) !== "string") error["RegisteredType"] = "RegisteredType must be of type string";


      let isError = !isEmpty(error);
      return {error, isError};
    }

    public validateGetAllCategoryInput = (data) => {
      let error = {};
      
      if(isEmpty(data.DomainID)) error["DomainID"] = "DomainID field is required";
      if(typeof(data.DomainID) !== "string") error["DomainID"] = "DomainID must be of type string";

      let isError = !isEmpty(error);
      return {error, isError};
    }

    public validateGetAllProductCategoryInput = (data) => {
      let error = {};
      
      if(isEmpty(data.CategoryId)) error["CategoryId"] = "CategoryId field is required";
      if(typeof(data.CategoryId) !== "string") error["CategoryId"] = "CategoryId must be of type string";

      let isError = !isEmpty(error);
      return {error, isError};
    }

    public validatePostBankDetailsInput = (data: BankDetails) : object =>{
      
      let error = {};

      // add necessary validation rules like type | length | required etc

      if(isEmpty(data.bankNumber)) error["bankNumber"] = "Bank Account Number field cannot be left blank";
      if(typeof(data.bankNumber) !== "string" ) error["bankNumber"] = "Bank Account Number must be of type string";

      if(isEmpty(data.brandId)) error["BrandId"] = "Brand ID field cannot be left blank";
      if(typeof(data.brandId) !== "string" ) error["BrandId"] = "Brand ID must be of type string";

      
      if(isEmpty(data.bankType)) error["bankType"] = "Bank Type field cannot be left blank";
      if(typeof(data.bankType) !== "string" ) error["bankType"] = "Bank Type must be of type string";


      if(isEmpty(data.bankName)) error["bankName"] = "Bank Name field cannot be left blank";
      if(typeof(data.bankName) !== "string" ) error["bankName"] = "Bank Name must be of type string";

      if(isEmpty(data.bankUrl)) error["bankUrl"] = "Bank Name field cannot be left blank";
      if(typeof(data.bankUrl) !== "string" ) error["bankUrl"] = "Bank Name must be of type string";


      if(isEmpty(data.bankStatus)) error["bankStatus"] = "Bank Status field cannot be left blank";
      if(typeof(data.bankStatus) !== "string" ) error["bankStatus"] = "Bank Status must be of type string";

      
      if(isEmpty(data.isDefault)) error["isDefault"] = "Is Default field cannot be left blank";
      if(typeof(data.isDefault) !== "string" ) error["isDefault"] = "Is Default must be of type string";

      if(isEmpty(data.ifscCode)) error["ifscCode"] = "IFSC field cannot be left blank";
      if(typeof(data.ifscCode) !== "string" ) error["ifscCode"] = "IFSC must be of type string";
      

      let isError = !isEmpty(error);
      return {error, isError};
  }

  public validateGetBankDetailsInput = (brandId: string): object =>{
      let error = {};

      if(isEmpty(brandId)) error["brandId"] = "Brand ID field cannot be left blank";
      if(typeof(brandId) !== "string" ) error["brandId"] = "Brand ID must be of type string";


      let isError = !isEmpty(error);
      return {error, isError};

  }

  public validateUpdateBankDetailsInput = (data: UpdateBankDetails) : object =>{
      let error = {};

      // add necessary validation rules like type | length | required etc

      if(isEmpty(data.bankNumber)) error["bankNumber"] = "Bank Account Number field cannot be left blank";
      if(typeof(data.bankNumber) !== "string" ) error["bankNumber"] = "Bank Account Number must be of type string";

      
      if(isEmpty(data.bankType)) error["bankType"] = "Bank Type field cannot be left blank";
      if(typeof(data.bankType) !== "string" ) error["bankType"] = "Bank Type must be of type string";


      if(isEmpty(data.bankName)) error["bankName"] = "Bank Name field cannot be left blank";
      if(typeof(data.bankName) !== "string" ) error["bankName"] = "Bank Name must be of type string";

      if(isEmpty(data.bankUrl)) error["bankUrl"] = "Bank Name field cannot be left blank";
      if(typeof(data.bankUrl) !== "string" ) error["bankUrl"] = "Bank Name must be of type string";


      if(isEmpty(data.bankStatus)) error["bankStatus"] = "Bank Status field cannot be left blank";
      if(typeof(data.bankStatus) !== "string" ) error["bankStatus"] = "Bank Status must be of type string";

      
      if(isEmpty(data.isDefault)) error["isDefault"] = "Is Default field cannot be left blank";
      if(typeof(data.isDefault) !== "string" ) error["isDefault"] = "Is Default must be of type string";

      let isError = !isEmpty(error);
      return {error, isError};
  }

  public validatePostKycDetailsInput = (data: KycDetails): object =>{
    let error = {}

    console.log(data,"/////////////////////////////");
    

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
