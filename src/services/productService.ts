import { Product } from "../models/product";
import { IProductService } from "./IProductService";
import { db } from "../configuration/db.config";
import { integer } from "aws-sdk/clients/cloudfront";

class ProductService implements IProductService {
  private constructor() {}
  private static instance: IProductService = null;

  static getInstance() {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  public async postProduct(productData: Product): Promise<Product> {
    try {

      // let product: Product = {
      //   BusinessDomain:productData.BusinessDomain,
      //   Type:productData.Type,
      //   Name: productData.Name,
      //   Category: productData.Category,
      //   Brand: productData.Brand, 
      //   BrandId:productData.BrandId,
      //   AvailableIn:productData.AvailableIn,
      //   AvailableInUrl:productData.AvailableInUrl,
      //   IsPaid:productData.IsPaid,
      //   Plans:productData.Plans,
      //   Features:productData.Features,
      //   Images:productData.Images,
      //   DefaultImageUrl:productData.DefaultImageUrl,
      //   Description:productData.Description,
      //   Discount:productData.Discount,
      //   BuddyMargin:productData.BuddyMargin,
      //   CommonMargin:productData.CommonMargin,
      //   Currency: productData.Currency, 
      //   SellingPrice: productData.SellingPrice,
      //   ActualPrice:productData.ActualPrice
      //       };
  
      let sql = `CALL PostProduct(?,?,?,?,?,?,?,?,?,?,?,?)`;
      let result = await db.query(sql, [
        productData.Name,
        productData.Category,
        productData.Type,
        productData.Brand,
        productData.Currency,
        productData.Description
      ]);
      console.log(result);
      return result;
      
    } catch (error) {
      return error
      
    }
  }

  public async getProduct(productId: integer): Promise<Product> {
    
    try {
      console.log("Product ID"+productId);
      let sql = `CALL GetProducts(?)`;
      const [rows, fields] = await db.query(sql, productId);
      return <Product> rows;
    } catch (error) {
      return null;
    }
  }
  public async getProducts(businessId: integer): Promise<Product> {
    
    try {
      console.log("Business ID is"+ businessId);
      let sql = `CALL GetProductsByBusinessId(?)`;
      const [rows, fields] = await db.query(sql, businessId);
      return <Product> rows;
    } catch (error) {
      return null;
    }
  }
  
}
export { ProductService };
