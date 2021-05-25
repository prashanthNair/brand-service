import { Integer } from "aws-sdk/clients/apigateway";
import { Product } from "../models/product";

export interface IProductService {
  postProduct(productData: Product);
  getProduct(productId: string): Promise<Product>;
  getProducts(businessId: object): Promise<Product>;
  
}