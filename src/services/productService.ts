import { Product } from "../models/product";
import { IProductService } from "./IProductService";
import { db } from "../configuration/db.config";
import { integer } from "aws-sdk/clients/cloudfront";
import productRoute from "../routes/product";

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
      let sql = `CALL PostProduct(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
      let result = await db.query(sql, Object.values(productData));
      console.log(result);
      return result;

    } catch (error) {
      console.log(error)
      return null;
    }
  }
  
  public async getProducts(brandId: string): Promise<Product> {
    
    try {
      let sql = `CALL GetProductsByBrandId(?)`; // procedure need updates.
      const result = await db.query(sql, brandId);
      return result;
    } catch (error) {
      console.log(error)
      return null;
    }
  }
  
  public async getProduct(productId: string): Promise<Product> {

    try {
      let sql = `CALL GetProducts(?)`; // procedure need updates.
      const result = await db.query(sql, productId);
      return result;
    } catch (error) {
      console.log(error)
      return null;
    }
  }

}
export { ProductService };
