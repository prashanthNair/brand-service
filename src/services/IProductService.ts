import { Integer } from "aws-sdk/clients/apigateway";
import { GetAllProductsInput, GetBrandProductInput, Product } from "../models/product";

export interface IProductService {
  postProduct(productData: Product);
  getProduct(inputObj: GetBrandProductInput): Promise<Product>;
  getProducts(inputObj: GetAllProductsInput): Promise<Product>;
  
}