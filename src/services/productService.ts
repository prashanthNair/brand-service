import { GetAllProductsInput, GetBrandProductInput, Product } from "../models/product";
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
      
      let sql = `CALL PostProduct(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`; // dynamic query in progress..
      let result = await db.query(sql, Object.values(productData));
      console.log(result);
      return result;

    } catch (error) {
      console.log(error)
      return error;
    }
  }

  public getProducts(input: GetAllProductsInput): Promise<Product> {

    let sql = `CALL GetAllProducts(?,?)`;
    return db.query(sql, Object.values(input));

  }
  
  public getProduct(input: GetBrandProductInput): Promise<Product> {

      let sql = `CALL Get_Product(?,?)`;
      return db.query(sql, Object.values(input));

  }

}
export { ProductService };
