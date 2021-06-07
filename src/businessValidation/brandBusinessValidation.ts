import validator from 'validator';
import { BrandRegisterModel } from "../models/brandRegisterModel";
import { BrandUpdateModel } from "../models/brandUpdateModel";
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
        else if(typeof(data.DomainID) !== "string") error["DomainID"] = "DomainID must be of type string";

        if(isEmpty(data.CategoryId)) error["CategoryId"] = "CategoryId field is required";
        else if(typeof(data.CategoryId) !== "string") error["CategoryId"] = "CategoryId must be of type string";

        if(isEmpty(data.Category)) error["Category"] = "Category field is required";
        else if(typeof(data.Category) !== "string") error["Category"] = "Category must be of type string";
        
        if(isEmpty(data.BrandName)) error["BrandName"] = "BrandName field is required";
        else if(typeof(data.BrandName) !== "string") error["BrandName"] = "BrandName must be of type string";
        
        if(isEmpty(data.About)) error["About"] = "About field is required";
        else if(typeof(data.About) !== "string") error["About"] = "About must be of type string";
        
        if(isEmpty(data.Country)) error["Country"] = "Country field is required";
        else if(typeof(data.Country) !== "string") error["Country"] = "Country must be of type string";
        
        if(isEmpty(data.EmailId)) error["EmailId"] = "EmailId field is required";
        else if(typeof(data.EmailId) !== "string") error["EmailId"] = "EmailId must be of type string";
        else if(!validator.isEmail(data.EmailId)) error["EmailId"] = "Enter a valid EmailId";

        if(isEmpty(data.PhoneNumber)) error["PhoneNumber"] = "PhoneNumber field is required";
        else if(typeof(data.PhoneNumber) !== "number") error["PhoneNumber"] = "PhoneNumber must be of type number";
        
        if(isEmpty(data.CountryCode)) error["CountryCode"] = "CountryCode field is required";
        else if(typeof(data.CountryCode) !== "string") error["CountryCode"] = "CountryCode must be of type string";
        
        if(isEmpty(data.Street)) error["Street"] = "Street field is required";
        else if(typeof(data.Street) !== "string") error["Street"] = "Street must be of type string";
        
        if(isEmpty(data.City)) error["City"] = "City field is required";
        else if(typeof(data.City) !== "string") error["City"] = "City must be of type string";

        if(isEmpty(data.State)) error["State"] = "State field is required";
        else if(typeof(data.State) !== "string") error["State"] = "State must be of type string";
        
        if(isEmpty(data.PostalCode)) error["PostalCode"] = "PostalCode field is required";
        else if(typeof(data.PostalCode) !== "string") error["PostalCode"] = "PostalCode must be of type string";
        
        if(isEmpty(data.UserName)) error["UserName"] = "UserName field is required";
        else if(typeof(data.UserName) !== "string") error["UserName"] = "UserName must be of type string";

        if(isEmpty(data.Designation)) error["Designation"] = "Designation field is required";
        else if(typeof(data.Designation) !== "string") error["Designation"] = "Designation must be of type string";
        
        if(isEmpty(data.UserEmailId)) error["UserEmailId"] = "UserEmailId field is required";
        else if(typeof(data.UserEmailId) !== "string") error["UserEmailId"] = "UserEmailId must be of type string";
        else if(!validator.isEmail(data.UserEmailId)) error["UserEmailId"] = "Enter a valid Email Id";

        if(isEmpty(data.RegBusinessName)) error["RegBusinessName"] = "RegBusinessName field is required";
        else if(typeof(data.RegBusinessName) !== "string") error["RegBusinessName"] = "RegBusinessName must be of type string";
        
        if(isEmpty(data.RegisteredType)) error["RegisteredType"] = "RegisteredType field is required";
        else if(typeof(data.RegisteredType) !== "string") error["RegisteredType"] = "RegisteredType must be of type string";

        if(isEmpty(data.AccountPassword)) error["AccountPassword"] = "AccountPassword field is required";
        else if(typeof(data.AccountPassword) !== "string") error["AccountPassword"] = "AccountPassword must be of type string";


        let isError = !isEmpty(error);
        return {error, isError};
    }

    public validatePatchBrandInput = (BrandID: string, data: BrandUpdateModel) : object  => {
      let error = {};
      
      if(isEmpty(BrandID)) error["BrandID"] = "BrandID field is required";
      else if(typeof(BrandID) !== "string") error["BrandID"] = "BrandID must be of type string";

      if(isEmpty(data.DomainID)) error["DomainID"] = "DomainID field is required";
      else if(typeof(data.DomainID) !== "string") error["DomainID"] = "DomainID must be of type string";

      if(isEmpty(data.CategoryId)) error["CategoryId"] = "CategoryId field is required";
      else if(typeof(data.CategoryId) !== "string") error["CategoryId"] = "CategoryId must be of type string";

      if(isEmpty(data.Category)) error["Category"] = "Category field is required";
      else if(typeof(data.Category) !== "string") error["Category"] = "Category must be of type string";
      
      if(isEmpty(data.BrandName)) error["BrandName"] = "BrandName field is required";
      else if(typeof(data.BrandName) !== "string") error["BrandName"] = "BrandName must be of type string";
      
      if(isEmpty(data.About)) error["About"] = "About field is required";
      else if(typeof(data.About) !== "string") error["About"] = "About must be of type string";
      
      if(isEmpty(data.Country)) error["Country"] = "Country field is required";
      else if(typeof(data.Country) !== "string") error["Country"] = "Country must be of type string";
      
      if(isEmpty(data.EmailId)) error["EmailId"] = "EmailId field is required";
      else if(typeof(data.EmailId) !== "string") error["EmailId"] = "EmailId must be of type string";
      else if(!validator.isEmail(data.EmailId)) error["EmailId"] = "Enter a valid EmailId";

      if(isEmpty(data.PhoneNumber)) error["PhoneNumber"] = "PhoneNumber field is required";
      else if(typeof(data.PhoneNumber) !== "number") error["PhoneNumber"] = "PhoneNumber must be of type number";
      
      if(isEmpty(data.CountryCode)) error["CountryCode"] = "CountryCode field is required";
      else if(typeof(data.CountryCode) !== "string") error["CountryCode"] = "CountryCode must be of type string";
      
      if(isEmpty(data.Street)) error["Street"] = "Street field is required";
      else if(typeof(data.Street) !== "string") error["Street"] = "Street must be of type string";
      
      if(isEmpty(data.City)) error["City"] = "City field is required";
      else if(typeof(data.City) !== "string") error["City"] = "City must be of type string";

      if(isEmpty(data.State)) error["State"] = "State field is required";
      else if(typeof(data.State) !== "string") error["State"] = "State must be of type string";
      
      if(isEmpty(data.PostalCode)) error["PostalCode"] = "PostalCode field is required";
      else if(typeof(data.PostalCode) !== "string") error["PostalCode"] = "PostalCode must be of type string";
      
      if(isEmpty(data.UserName)) error["UserName"] = "UserName field is required";
      else if(typeof(data.UserName) !== "string") error["UserName"] = "UserName must be of type string";

      if(isEmpty(data.Designation)) error["Designation"] = "Designation field is required";
      else if(typeof(data.Designation) !== "string") error["Designation"] = "Designation must be of type string";
      
      if(isEmpty(data.UserEmailId)) error["UserEmailId"] = "UserEmailId field is required";
      else if(typeof(data.UserEmailId) !== "string") error["UserEmailId"] = "UserEmailId must be of type string";
      else if(!validator.isEmail(data.UserEmailId)) error["UserEmailId"] = "Enter a valid Email Id";

      if(isEmpty(data.RegBusinessName)) error["RegBusinessName"] = "RegBusinessName field is required";
      else if(typeof(data.RegBusinessName) !== "string") error["RegBusinessName"] = "RegBusinessName must be of type string";
      
      if(isEmpty(data.RegisteredType)) error["RegisteredType"] = "RegisteredType field is required";
      else if(typeof(data.RegisteredType) !== "string") error["RegisteredType"] = "RegisteredType must be of type string";


      let isError = !isEmpty(error);
      return {error, isError};
    }

    public validateGetAllCategoryInput = (data) => {
      let error = {};
      
      if(isEmpty(data.DomainID)) error["DomainID"] = "DomainID field is required";
      else if(typeof(data.DomainID) !== "string") error["DomainID"] = "DomainID must be of type string";

      let isError = !isEmpty(error);
      return {error, isError};
    }

    public validateGetAllProductCategoryInput = (data) => {
      let error = {};
      
      if(isEmpty(data.CategoryId)) error["CategoryId"] = "CategoryId field is required";
      else if(typeof(data.CategoryId) !== "string") error["CategoryId"] = "CategoryId must be of type string";

      let isError = !isEmpty(error);
      return {error, isError};
    }
}
