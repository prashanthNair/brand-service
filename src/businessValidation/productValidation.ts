import validator from 'validator';
import { GetAllProductsInput, Product } from "../models/product";
import { IProductValidation } from "./IProductValidation";
import { isEmpty } from './isEmpty';

class ProductValidation implements IProductValidation {
    private constructor() {}
  
    private static instance: IProductValidation = null;
  
    static getInstance() {
      if (!ProductValidation.instance) {
        ProductValidation.instance = new ProductValidation();
      }
      return ProductValidation.instance;
    }

    public validatePostProductInput = (data: Product) : object =>{

        let error = {};

        // add necessary validation rules like type | length | required etc

        if(isEmpty(data.categoryId)) error["categoryId"] = "categoryId field is required";
        else if(typeof(data.categoryId) !== "string") error["categoryId"] = "categoryId must be of type string";

        if(isEmpty(data.productCategoryId)) error["productCategoryId"] = "productCategoryId field is required";
        else if(typeof(data.productCategoryId) !== "string") error["productCategoryId"] = "productCategoryId must be of type string";
        
        if(isEmpty(data.brandId)) error["brandId"] = "brandId field is required";
        else if(typeof(data.brandId) !== "string") error["brandId"] = "brandId must be of type string";
        
        if(isEmpty(data.productName)) error["productName"] = "productName field is required";
        else if(typeof(data.productName) !== "string") error["productName"] = "productName must be of type string";
        
        if(isEmpty(data.title)) error["title"] = "title field is required";
        else if(typeof(data.title) !== "string") error["title"] = "title must be of type string";
        
        if(isEmpty(data.keyPoints)) error["keyPoints"] = "keyPoints field is required";
        else if(typeof(data.keyPoints) !== "string") error["keyPoints"] = "keyPoints must be of type string";
        
        if(isEmpty(data.mrp)) error["mrp"] = "mrp field is required";
        else if(typeof(data.mrp) !== "number") error["mrp"] = "mrp must be of type number";
        
        if(isEmpty(data.sellingPrice)) error["sellingPrice"] = "sellingPrice field is required";
        else if(typeof(data.sellingPrice) !== "number") error["sellingPrice"] = "sellingPrice must be of type number";
        
        if(isEmpty(data.loyaltyPercentage)) error["loyaltyPercentage"] = "loyaltyPercentage field is required";
        else if(typeof(data.loyaltyPercentage) !== "number") error["loyaltyPercentage"] = "loyaltyPercentage must be of type number";
        
        if(isEmpty(data.buddyMargin)) error["buddyMargin"] = "buddyMargin field is required";
        else if(typeof(data.buddyMargin) !== "number") error["buddyMargin"] = "buddyMargin must be of type number";

        if(isEmpty(data.isVeg)) error["isVeg"] = "isVeg field is required";
        else if(typeof(data.isVeg) !== "boolean") error["isVeg"] = "isVeg must be of type boolean";
        
        if(isEmpty(data.ageGroup)) error["ageGroup"] = "ageGroup field is required";
        else if(typeof(data.ageGroup) !== "number") error["ageGroup"] = "ageGroup must be of type number";
        
        if(isEmpty(data.weight)) error["weight"] = "weight field is required";
        else if(typeof(data.weight) !== "string") error["weight"] = "weight must be of type string";

        if(isEmpty(data.manufacturedDate)) error["manufacturedDate"] = "manufacturedDate field is required";
        else if(typeof(data.manufacturedDate) !== "string") error["manufacturedDate"] = "manufacturedDate must be of type string";
        
        if(isEmpty(data.expiryDate)) error["expiryDate"] = "expiryDate field is required";
        else if(typeof(data.expiryDate) !== "string") error["expiryDate"] = "expiryDate must be of type string";
        
        if(isEmpty(data.productBrand)) error["productBrand"] = "productBrand field is required";
        if(typeof(data.productBrand) !== "string") error["productBrand"] = "productBrand must be of type string";
        
        if(isEmpty(data.currency)) error["currency"] = "currency field is required";
        else if(typeof(data.currency) !== "string") error["currency"] = "currency must be of type string";

        let isError = !isEmpty(error);
        return {error, isError};
    }

    public validateGetAllProducts = (data: GetAllProductsInput) => {
      let error = {};
      console.log("status ", data.status)
      
      if(isEmpty(data["brandId"])) error["brandId"] = "brandId field is required";
      else if(typeof(data["brandId"]) !== "string") error["brandId"] = "brandId must be of type string";
  //  if(!validator.isLength(data.brandId, {min:1, max: 30})) error["brandId"] = "brandId length exceeded";

      if (isEmpty(data["status"])) error["status"] = "status field is required";
      else if (typeof (data["status"]) !== "string") error["status"] = "status must be of type string";
      else if (data["status"] && data["status"].toLowerCase() !== "active" && data["status"].toLowerCase() !== "inactive") error["status"] = "status must be either 'active' or 'inactive'";
      
      let isError = !isEmpty(error);
      return {error, isError};
    }

    public validateGetSingleProduct = (data: object) => {
      let error = {};

      if(isEmpty(data["brandId"])) error["brandId"] = "brandId field is required";
      else if(typeof(data["brandId"]) !== "string") error["brandId"] = "brandId must be of type string";
  //  if(!validator.isLength(data.brandId, {min:1, max: 30})) error["brandId"] = "brandId length exceeded";

      
      if(isEmpty(data["productId"])) error["productId"] = "productId field is required";
      else if(typeof(data["productId"]) !== "string") error["productId"] = "productId must be of type string";
  //  if(!validator.isLength(data.productId, {min:1, max: 30})) error["productId"] = "productId length exceeded";

      let isError = !isEmpty(error);
      return {error, isError};
    }
}

export { ProductValidation};

